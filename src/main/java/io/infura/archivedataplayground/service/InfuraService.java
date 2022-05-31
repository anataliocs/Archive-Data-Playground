package io.infura.archivedataplayground.service;

import io.infura.archivedataplayground.service.dto.infura.GetBlockByNumberResponse;
import io.infura.archivedataplayground.service.dto.infura.InfuraBlockByNumberRequest;
import io.infura.archivedataplayground.service.dto.infura.InfuraRequest;
import io.infura.archivedataplayground.service.dto.infura.GetLatestBlockResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import static java.lang.Boolean.TRUE;

@Service
public class InfuraService {

    @Value("${infura.projectid}")
    private String infuraProjectId;

    final RestTemplate restTemplate;

    public InfuraService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public GetLatestBlockResponse getLatestBlock() {

        final UriComponents uri = getBaseUriBuilder()
            .buildAndExpand(infuraProjectId);

        return restTemplate.postForObject(uri.toUri(), new InfuraRequest()
            .setMethod("eth_blockNumber"), GetLatestBlockResponse.class);
    }

    public GetBlockByNumberResponse getBlockByNumber() {

        final UriComponents uri = getBaseUriBuilder()
            .buildAndExpand(infuraProjectId);

        return restTemplate.postForObject(uri.toUri(), new InfuraBlockByNumberRequest()
            .setMethod("eth_getBlockByNumber")
            .setParams(new Object[]{"0x5BAD55", TRUE}), GetBlockByNumberResponse.class);
    }

    private static UriComponentsBuilder getBaseUriBuilder() {
        return UriComponentsBuilder
            .fromHttpUrl("https://mainnet.infura.io/v3/{id}");
    }
}
