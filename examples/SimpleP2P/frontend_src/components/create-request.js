import RequestNetwork from '@requestnetwork/request-network.js';
import Eth from 'ethjs';
import { LitElement, html } from 'lit-html-element';

export default class CreateRequest extends LitElement {
    static get properties() {
        return {
            payeeAddress: { type: String },
            payerAddress: { type: String },
            reason: { type: String },
            amountRequired: { type: Number },
            rn: { type: Object },
            eth: { type: Object }
        }
    }



    constructor() {
        super();
    }

    render() {
        return html`
            <style> 
                body,h1,h2,h3,h4,h5,h6{font-weight:400;font-family:-apple-system,BlinkMacSystemFont,Avenir,"Avenir Next","Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}body,h6{line-height:1.6}html{box-sizing:border-box;font-size:62.5%;margin:0;padding:0}body{letter-spacing:.01em;font-size:1.5em}h1,h2,h3{letter-spacing:-.1rem}h1{font-size:4rem;line-height:1.2}h2{font-size:3.6rem;line-height:1.25}h3{font-size:3rem;line-height:1.3}h4{font-size:2.4rem;line-height:1.35;letter-spacing:-.08rem}h5{font-size:1.8rem;line-height:1.5;letter-spacing:-.05rem}h6{font-size:1.5rem;letter-spacing:0}@media (min-width:550px){h1{font-size:5rem}h2{font-size:4.2rem}h3{font-size:3.6rem}h4{font-size:3rem}h5{font-size:2.4rem}h6{font-size:1.5rem}}a{color:#104cfb;transition:all .1s ease}a:hover{color:#222}[type=submit],button{padding:1.1rem 3.5rem;margin:1rem 0;background:#111;color:#f5f5f5;border-radius:2px;border:none;font-size:1.3rem;transition:all .2s ease}[type=submit].outline,button.outline{padding:1.1rem 3.5rem;background:0 0;color:#111;border:1.5px solid #111}[type=submit]:hover,button:hover{background:#222}[type=submit].outline:hover,button.outline:hover{background:0 0;border:1.5px solid #444;color:#444}[type=submit]:focus,button:focus{outline:0}[type=submit]:active,button:active{transform:scale(.99)}input[type=email],input[type=file],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],select,textarea,textarea[type=text]{margin:1rem 0;width:100%;max-width:100%;border-radius:2px;border:1px solid #a4a4a4;font-size:1.3rem;transition:all .2s ease}input[type=email]:hover,input[type=file],input[type=number]:hover,input[type=password]:hover,input[type=search]:hover,input[type=tel],input[type=text]:hover,select:hover,textarea:hover,textarea[type=text]:hover{border:1px solid #111}input[type=email]:focus,input[type=file],input[type=number],input[type=password]:focus,input[type=search]:focus,input[type=tel],input[type=text]:focus,select:focus textarea:focus,textarea[type=text]:focus{outline:0;border:1px solid #104cfb}input[type=email],input[type=file],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],select{padding:1.1rem}textarea,textarea[type=text]{height:10rem;padding:14px 20px}.container{max-width:960px;margin:0 auto;width:80%}.row{display:flex;flex-flow:row wrap;justify-content:space-between}.row>:first-child{margin-left:0}.row>:last-child{margin-right:0}.col{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.col,[class*=" col-"],[class^=col-]{margin:1rem}.col-1{flex:1}.col-2{flex:2}.col-3{flex:3}.col-4{flex:4}.col-5{flex:5}.col-6{flex:6}.col-7{flex:7}.col-8{flex:8}.col-9{flex:9}.col-10{flex:10}.col-11{flex:11}.col-12{flex:12}ul{list-style:circle inside}ol{list-style:decimal inside}.table{width:100%;border:none;border-collapse:collapse;border-spacing:0;text-align:left}.table td,.table th{vertical-align:middle;padding:12px 4px}.table thead{border-bottom:2px solid #333030}@media screen and (max-width:768px){.col,[class*=" col-"],[class^=col-]{margin:0;flex:0 0 100%}.table.responsive{position:relative;display:block}.table.responsive td,.table.responsive th{margin:0}.table.responsive thead{display:block;float:left;border:0}.table.responsive thead tr{display:block;padding:0 10px 0 0;border-right:2px solid #333030}.table.responsive th{display:block;text-align:right}.table.responsive tbody{display:block;overflow-x:auto;white-space:nowrap}.table.responsive tbody tr{display:inline-block}.table.responsive td{display:block;min-height:16px;text-align:left}.table.responsive tr{padding:0 10px}}.pull-right{float:right}.pull-left{float:left}.text-center{text-align:center}.full-screen{width:100%;min-height:100vh}.vertical-align{display:flex;align-items:center}.horizontal-align{display:flex;justify-content:center}.center,.right{align-items:center;display:flex}.center{justify-content:center}.right{justify-content:flex-end}.left{display:flex;align-items:center;justify-content:flex-start}.fixed{position:fixed;width:100%}@media screen and (max-width:400px){.hide-phone{display:none}}@media screen and (max-width:768px){.hide-tablet{display:none}}code{padding:.2rem .5rem;margin:0 .2rem;font-size:90%;white-space:nowrap;background:#F1F1F1;border:1px solid #E1E1E1;border-radius:4px;font-family:Consolas,Monaco,Menlo,monospace}pre>code{display:block;padding:1rem 1.5rem;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}.nav,.nav-brand,.nav-menu{display:flex}.nav{position:relative;flex-wrap:wrap;align-items:center;padding:1rem}.nav-menu{flex-flow:row;flex:1 0 auto}.nav-item{padding:1rem 2rem}.nav-logo{font-weight:bolder;font-size:2rem;line-height:0}
            </style>
            <div> 
                <h1> Create A Request </h1>
            </div>
        `;
    }
}
