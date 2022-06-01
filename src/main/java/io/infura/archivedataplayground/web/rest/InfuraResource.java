package io.infura.archivedataplayground.web.rest;

import io.infura.archivedataplayground.service.InfuraService;
import io.infura.archivedataplayground.service.dto.infura.GetBlockByNumberResponse;
import io.infura.archivedataplayground.service.dto.infura.GetLatestBlockResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * REST controller for Infura API Calls.
 */
@RestController
@RequestMapping("/api/infura")
public class InfuraResource {

    final InfuraService infuraService;

    public InfuraResource(InfuraService infuraService) {
        this.infuraService = infuraService;
    }

    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public GetLatestBlockResponse getLatestBlock() {
        return infuraService.getLatestBlock();
    }

    @GetMapping("/{blockNumber}")
    @ResponseStatus(HttpStatus.OK)
    public GetBlockByNumberResponse getBlockByNumber(@PathVariable String blockNumber) {
        return infuraService.getBlockByNumber(blockNumber);
    }
}
