package lk.ijse.be.service;

import lk.ijse.be.dto.CountryDTO;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class CountryService {

    private final RestTemplate restTemplate = new RestTemplate();
    private List<CountryDTO> cachedCountries = new ArrayList<>();

    // 10 minutes (600,000 ms) refresh rate
    @Scheduled(fixedRate = 600000)
    public void fetchAndCacheCountries() {

        String url = "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags";

        try {
            List<Map<String, Object>> response = restTemplate.getForObject(url, List.class);
            if (response != null) {
                this.cachedCountries = response.stream()
                        .map(this::mapToDTO)
                        .collect(Collectors.toList());
                System.out.println("Cache Updated: " + new Date());
            }
        } catch (Exception e) {
            System.err.println("Error fetching countries: " + e.getMessage());
        }
    }

    private CountryDTO mapToDTO(Map<String, Object> map) {
        CountryDTO dto = new CountryDTO();


        Map<String, Object> nameObj = (Map<String, Object>) map.get("name");
        dto.setName(nameObj != null ? (String) nameObj.get("common") : "N/A");


        List<String> capitals = (List<String>) map.get("capital");
        dto.setCapital(capitals != null && !capitals.isEmpty() ? capitals.get(0) : "N/A");

        dto.setRegion((String) map.get("region"));
        dto.setPopulation(((Number) map.get("population")).longValue());

        // Flags object eken png image eka gannawa
        Map<String, String> flags = (Map<String, String>) map.get("flags");
        dto.setFlag(flags != null ? flags.get("png") : "");

        return dto;
    }

    public List<CountryDTO> getAllCountries() {
        if (cachedCountries.isEmpty()) fetchAndCacheCountries();
        return cachedCountries;
    }

    public List<CountryDTO> search(String query) {
        return cachedCountries.stream()
                .filter(c -> c.getName().toLowerCase().contains(query.toLowerCase()))
                .collect(Collectors.toList());
    }
}