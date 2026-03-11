package lk.ijse.be.controller;

import lk.ijse.be.dto.CountryDTO;
import lk.ijse.be.service.CountryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/countries")
@CrossOrigin(origins = "*") // Frontend block wena eka nawaththanna
public class CountryController {

    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping
    public List<CountryDTO> getCountries() {
        return countryService.getAllCountries();
    }

    @GetMapping("/search")
    public List<CountryDTO> search(@RequestParam String name) {
        return countryService.search(name);
    }
}