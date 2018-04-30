import { Component , ViewChild, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import {MvtoresumenProvider} from '../../providers/mvtoresumen/mvtoresumen';
import {ParametrosProvider} from '../../providers/parametros/parametros';
import 'rxjs/add/operator/map';
/**
 * Generated class for the EstadisticoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estadistico',
  templateUrl: 'estadistico.html',
})
export class EstadisticoPage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('barCanvas1') barCanvas1;
  @ViewChild('barCanvas2') barCanvas2;
  @ViewChild('doughnutChart') doughnutChart;
    $scope: any;
    MyObj: any;
    ObjectJson;
    anio1;
    anio2;
    anio3;
    anios;
    top5;
    barChart: any;
    mes: any;
    prueba: any;
    filtroAno: any;
    filtroMes: any;
  constructor(public navCtrl: NavController, public navParams: NavParams ,
    public mvtoResumen: MvtoresumenProvider, public parametros: ParametrosProvider) {
        this.anios=[];
        this.anio1=[];
        this.anio2=[];
        this.anio3=[];
        this.top5=[];
    }

    ngOnInit() {
        var URL=this.mvtoResumen.years()
        .subscribe( anios => {//Esta variabe se definio en el Provider
            anios.map( anios =>{
                this.anios.push(anios);//Esta variabe Array se definio en la cabecera de esta hoja
            });
            var URL=this.mvtoResumen.NuevaClase(this.anios[0]['ano'])
            .subscribe( x => {
                x.map( idRmvto =>{
                    this.anio1.push(idRmvto);
                });
                if(this.anio1[0]['mes'] = 1){
                var mes1 = "Ene";  
                }
                if(this.anio1[1]['mes'] = 2){
                    var mes2 = "Feb";  
                }
                if(this.anio1[2]['mes'] = 3){
                    var mes3 = "Mar";  
                }
                if(this.anio1[3]['mes'] = 4){
                    var mes4 = "Abr";  
                }
                if(this.anio1[4]['mes'] = 5){
                    var mes5 = "May";  
                }
                if(this.anio1[5]['mes'] = 6){
                    var mes6 = "Jun";  
                }
                if(this.anio1[6]['mes'] = 7){
                    var mes7 = "Jul";  
                }
                if(this.anio1[7]['mes'] = 8){
                    var mes8 = "Ago";  
                }
                if(this.anio1[8]['mes'] = 9){
                    var mes9 = "Sep";  
                }
                if(this.anio1[9]['mes'] = 10){
                    var mes10 = "Oct";  
                }
                if(this.anio1[10]['mes'] = 11){
                    var mes11 = "Nov";  
                }
                if(this.anio1[11]['mes'] = 12){
                    var mes12 = "Dic";  
                }
                this.barChart = new Chart(this.barCanvas.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: [mes1,mes2,mes3,mes4,mes5,mes6,mes7,mes8,mes9,mes10,mes11,mes12],
                        datasets: [{
                            label: 'Año: '+this.anio1[0]['ano'],
                            data: [this.anio1[0]['total'],this.anio1[1]['total']
                            ,this.anio1[2]['total'],this.anio1[3]['total']
                            ,this.anio1[4]['total'],this.anio1[5]['total']
                            ,this.anio1[6]['total'],this.anio1[7]['total']
                            ,this.anio1[8]['total'],this.anio1[9]['total']
                            ,this.anio1[10]['total'],this.anio1[11]['total']],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                });
            });

            var URL=this.mvtoResumen.NuevaClase(this.anios[1]['ano'])
            .subscribe( x => {
                x.map( idRmvto =>{
                    this.anio2.push(idRmvto);
                });
                if(this.anio2[0]['mes'] = 1){
                var mes1 = "Ene";  
                }
                if(this.anio2[1]['mes'] = 2){
                    var mes2 = "Feb";  
                }
                if(this.anio2[2]['mes'] = 3){
                    var mes3 = "Mar";  
                }
                if(this.anio2[3]['mes'] = 4){
                    var mes4 = "Abr";  
                }
                if(this.anio2[4]['mes'] = 5){
                    var mes5 = "May";  
                }
                if(this.anio2[5]['mes'] = 6){
                    var mes6 = "Jun";  
                }
                if(this.anio2[6]['mes'] = 7){
                    var mes7 = "Jul";  
                }
                if(this.anio2[7]['mes'] = 8){
                    var mes8 = "Ago";  
                }
                if(this.anio2[8]['mes'] = 9){
                    var mes9 = "Sep";  
                }
                if(this.anio2[9]['mes'] = 10){
                    var mes10 = "Oct";  
                }
                if(this.anio2[10]['mes'] = 11){
                    var mes11 = "Nov";  
                }
                if(this.anio2[11]['mes'] = 12){
                    var mes12 = "Dic";  
                }
                this.barChart = new Chart(this.barCanvas1.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: [mes1,mes2,mes3,mes4,mes5,mes6,mes7,mes8,mes9,mes10,mes11,mes12],
                        datasets: [{
                            label: 'Año: '+this.anio2[0]['ano'],
                            data: [this.anio2[0]['total'],this.anio2[1]['total']
                            ,this.anio2[2]['total'],this.anio2[3]['total']
                            ,this.anio2[4]['total'],this.anio2[5]['total']
                            ,this.anio2[6]['total'],this.anio2[7]['total']
                            ,this.anio2[8]['total'],this.anio2[9]['total']
                            ,this.anio2[10]['total'],this.anio2[11]['total']],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                });
            });

            var URL=this.mvtoResumen.NuevaClase(this.anios[2]['ano'])
            .subscribe( x => {
                x.map( idRmvto =>{
                    this.anio3.push(idRmvto);
                });
                if(this.anio3[0]['mes'] = 1){
                var mes1 = "Ene";  
                }
                if(this.anio3[1]['mes'] = 2){
                    var mes2 = "Feb";  
                }
                if(this.anio3[2]['mes'] = 3){
                    var mes3 = "Mar";  
                }
                if(this.anio3[3]['mes'] = 4){
                    var mes4 = "Abr";  
                }
                if(this.anio3[4]['mes'] = 5){
                    var mes5 = "May";  
                }
                if(this.anio3[5]['mes'] = 6){
                    var mes6 = "Jun";  
                }
                if(this.anio3[6]['mes'] = 7){
                    var mes7 = "Jul";  
                }
                if(this.anio3[7]['mes'] = 8){
                    var mes8 = "Ago";  
                }
                if(this.anio3[8]['mes'] = 9){
                    var mes9 = "Sep";  
                }
                if(this.anio3[9]['mes'] = 10){
                    var mes10 = "Oct";  
                }
                if(this.anio3[10]['mes'] = 11){
                    var mes11 = "Nov";  
                }
                if(this.anio3[11]['mes'] = 12){
                    var mes12 = "Dic";  
                }
                this.barChart = new Chart(this.barCanvas2.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: [mes1,mes2,mes3,mes4,mes5,mes6,mes7,mes8,mes9,mes10,mes11,mes12],
                        datasets: [{
                            label: 'Año: '+this.anio3[0]['ano'],
                            data: [this.anio3[0]['total'],this.anio3[1]['total']
                            ,this.anio3[2]['total'],this.anio3[3]['total']
                            ,this.anio3[4]['total'],this.anio3[5]['total']
                            ,this.anio3[6]['total'],this.anio3[7]['total']
                            ,this.anio3[8]['total'],this.anio3[9]['total']
                            ,this.anio3[10]['total'],this.anio3[11]['total']],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                });
            });
        });
    }

    btnAceptar(){
        var pAnio;
        pAnio=this.filtroAno.substring(2,4);
        alert(this.filtroMes+pAnio);
        var URL=this.mvtoResumen.top5(this.filtroMes+pAnio)
        .subscribe( top => {
            top.map( prod_o_serv_idprod_o_serv =>{
                this.top5.push(prod_o_serv_idprod_o_serv);
            });

            this.doughnutChart = new Chart(this.doughnutChart.nativeElement, {
     
                type: 'doughnut',
                data: {
                    labels: [this.top5[0]['NOMBRE'], this.top5[1]['NOMBRE'],this.top5[3]['NOMBRE'],],
                    datasets: [{
                        label: 'Hola',
                        data: [this.top5[0]['CANTIDAD'], this.top5[1]['CANTIDAD'], this.top5[3]['CANTIDAD']],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
                }
     
            });
        });
    }
}
