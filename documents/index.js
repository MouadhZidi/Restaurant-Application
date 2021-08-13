module.exports = ({ name, price1, price2, receiptId }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td class="title"><img  src="data:image/jpeg;base64,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"
                               style="width:100%; max-width:156px;"></td>
                            <td>
                               Datum: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               Customer name: ${name}
                            </td>
                            <td>
                               Receipt number: ${receiptId}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">
                   <td>Bought items:</td>
                   <td>Price</td>
                </tr>
                <tr class="item">
                   <td>Commande:</td>
                   <td>${price1} Dt</td>
                </tr>
                
             </table>
             <br />
             <h1 class="justify-center">Total price: ${parseInt(price1) + parseInt(price2)}$</h1>
          </div>
       </body>
    </html>
    `;
};