import { Injectable } from "@angular/core";
import { ExternalConfigurationHandlerInterface, ExternalConfiguration } from "angular4-hal";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ExternalConfigurationService implements ExternalConfigurationHandlerInterface {

    deserialize(): any {
    };
    serialize(): any {
    };
    
    getProxyUri(): string {
        return "http://localhost:10024";
    }

    getRootUri(): string {
        return "http://localhost:10024";
    }

    getHttp(): HttpClient {
        return this.http;
    }

    constructor(private http: HttpClient) {
    }

    getExternalConfiguration(): ExternalConfiguration {
        return null;
    }

    setExternalConfiguration(externalConfiguration: ExternalConfiguration) {
    }
}