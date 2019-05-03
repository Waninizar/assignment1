import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQB0TrPx7SSW2WbinGgVJUbyPAxKC6CGcLajnAItKog7kxkyXDO3dJXFYiFgcYv1ro9YJ_a-7u--HkRSHUFhU2EZt8oH2tX3SuUvXPLzPhwT_7JJAShLy1SYccIjhp8Gk6drETRofaklkYWyy2jdlyZErzgEoRQH0HUxT6deRFx6EAkmO_qjZGPlJT_LUaDH6UL8MG3zeH5QAmxACy7wK4re8IEYl7WfbTw4mxnD1k2cex6GZ_Wjlaq5viRiQUjv-nGSEtroNSDlR060K2p-KVphukHWbAVp-0I"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
