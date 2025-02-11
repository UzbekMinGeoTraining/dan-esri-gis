/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private readonly apiService: ApiService) {
    this.apiService
      .getReservoirData()
      .toPromise()
      .then((data) => {
        console.debug('this is the reservoir data: ', data);
      });
  }

  public initializeCanalData(): GeoJSONLayer {
    return new GeoJSONLayer({
      url: '../../assets/data/main-irrigation-canal.geojson',
      renderer: new SimpleRenderer({
        symbol: new SimpleLineSymbol({
          color: 'green',
          width: 2,
        }),
      }),
      popupTemplate: {
        title: '{Kanal_nomi}',
        content: ` <table style="width:100%; border-collapse: collapse;">
          <tr>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Property</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Value</th>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Kanal_nomi</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Kanal_nomi}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Kadastr_ra</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Kadastr_ra}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Joylashgan</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Joylashgan}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Suv_olish_</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Suv_olish_}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Kapitallik</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Kapitallik}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Asosiy_vaz</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{VazifasiAsosiy_vaztd>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Maksimal_s</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Maksimal_s}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Qoplama_tu</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Qoplama_tu}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Qoplama_1</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Qoplama_1}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Qoplamasiz</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Qoplamasiz}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Qoplamas_1</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Qoplamas_1}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Jami_uzunl</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Jami_uzunl}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Inshootlar</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Inshootlar}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Sugoriladi</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Sugoriladi}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Foydalanis</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Foydalanis}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Foydalanuv</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Foydalanuv}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Tamir_turi</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Tamir_turi}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Tamir_boyi</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Tamir_boyi}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Tamirlanga</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Tamirlanga}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Tamirlagan</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Tamirlagan}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">NAME</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{NAME}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">tessellate</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{tessellate}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Shape_Leng</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Shape_Leng}</td>
          </tr>
        </table>
`,
      },
    });
  }

  public initializeReservoirData(): Promise<GeoJSONLayer> {
    return this.apiService
      .getReservoirData()
      .toPromise()
      .then((geojsonData: any) => {
        const blob = new Blob([JSON.stringify(geojsonData)], { type: 'application/json' });
        const geojsonUrl = URL.createObjectURL(blob); // Convert data to a URL
        return new GeoJSONLayer({
          url: geojsonUrl,
          renderer: new SimpleRenderer({
            symbol: new SimpleFillSymbol({
              color: [0, 0, 255, 0.4], // Blue fill with 40% opacity
              outline: {
                color: [0, 0, 255],
                width: 2,
              },
            }),
          }),
        });
      });
  }

  //   popupTemplate: {
  //     title: '{Suv_omborl}', // Displays the "Suv_omborl" property from your GeoJSON
  //     content: `
  // <table style="width:100%; border-collapse: collapse;">
  // <tr>
  //   <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Property</th>
  //   <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Value</th>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Suv_omborl</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Suv_omborl}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Kadastr_ra</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Kadastr_ra}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Suv_ombor_</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Suv_ombor_}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Suv_ombor1</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Suv_ombor1}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Suv_olish_</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Suv_olish_}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Toplangan_</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Toplangan_}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Suv_ombo_1</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Suv_ombo_1}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Suv_ombo_2</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Suv_ombo_2}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Suv_istemo</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Suv_istemo}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Kapitallik</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Kapitallik}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Togon_turi</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Togon_turi}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Togonning_</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Togonning_}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Egallagan_</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Egallagan_}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Suv_ombo_3</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Suv_ombo_3}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Togondagi_</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Togondagi_}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Foydalanis</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Foydalanis}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Foydalanuv</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Foydalanuv}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Tamir_turi</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Tamir_turi}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Tamir_boyi</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Tamir_boyi}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Tamirlanga</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Tamirlanga}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Tamirlagan</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Tamirlagan}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Sarflangan</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Sarflangan}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">nomi</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{nomi}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">suv_s</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{suv_s}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">ishga</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{ishga}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">SHAPE_Leng</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{SHAPE_Leng}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Shape_Le_1</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Shape_Le_1}</td>
  // </tr>
  // <tr>
  //   <td style="border: 1px solid #ddd; padding: 8px;">Shape_Area</td>
  //   <td style="border: 1px solid #ddd; padding: 8px;">{Shape_Area}</td>
  // </tr>
  // </table>
  // `,
  //   },

  public initilizePumpingStationData(): GeoJSONLayer {
    return new GeoJSONLayer({
      popupTemplate: {
        title: '{Nasos_stan}',
        content: ` <table style="width:100%; border-collapse: collapse;">
          <tr>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Property</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Value</th>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Nasos_stan</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Nasos_stan}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Kadastr_ra</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Kadastr_ra}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Joylashgan</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Joylashgan}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Suv_olish_</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Suv_olish_}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Kapitallik</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Kapitallik}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Vazifasi</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Vazifasi}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Maksimal_s</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Maksimal_s}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Kotarish_b</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Kotarish_b}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Agregatlar</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Agregatlar}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Belgilanga</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Belgilanga}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Foydalanis</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Foydalanis}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Foydalanuv</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Foydalanuv}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Tamir_turi</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Tamir_turi}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Tamir_boyi</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Tamir_boyi}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Tamirlanga</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Tamirlanga}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Tamirlagan</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Tamirlagan}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Sarflangan</td>
            <td style="border: 1px solid #ddd; padding: 8px;">{Sarflangan}</td>
          </tr>
        </table>
`,
      },
      url: '../../assets/data/pumping-stations.geojson',
      renderer: new SimpleRenderer({
        symbol: new SimpleMarkerSymbol({
          color: 'red',
          size: '5px',
          style: 'circle',
        }),
      }),
    });
  }
}
