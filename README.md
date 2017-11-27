# Getting Started

+ Clone the repository
  ```bash
  git clone https://github.com/alphabeat/invoice-timeline.git
  ```

+ Install the dependencies
  ```bash
  yarn
  ```

+ Install sequelize-cli
  ```bash
  npm install -g sequelize-cli
  ```

+ Set database environment variables
  ```bash
  $ export PGHOST="<HOST>"
  $ export PGUSER="<USER>"
  $ export PGPASSWORD="<PASSWORD>"
  $ export PGDATABASE="invoice_timeline"
  ```
  In production environment, set only an env variable DATABASE_URL with your complete database URL, for example :

  ```bash
  $ export DATABASE_URL="postgres://<user>:<password>@<host>:5432/<database>"
  ```

+ Run the migrations (create the tables in DB)
  ```bash
  $ sequelize db:migrate
  ```

+ Connect to your database and create some data (invoices, payments)
  ```bash
  $ psql
  invoice_timeline=$ INSERT INTO "Invoices" (reference, amount, status, "dueAt", customer, "createdAt", "updatedAt") VALUES ('56722', 10548.0, 'due', NOW(), 'Aircall',  NOW(), NOW());
  invoice_timeline=$ INSERT INTO "Invoices" (reference, amount, status, "dueAt", customer, "createdAt", "updatedAt") VALUES ('56723', 8675.0, 'due', NOW(), 'Aircall',  NOW(), NOW());
  invoice_timeline=$ INSERT INTO "Invoices" (reference, amount, status, "dueAt", customer, "createdAt", "updatedAt") VALUES ('56724', 5289.0, 'due', NOW(), 'Forest',  NOW(), NOW());
  invoice_timeline=$ INSERT INTO "Payments" (reference,"paidAt",method,"walletName","walletId","createdAt","updatedAt","invoiceId") VALUES('123548',NOW(),'WireTransfer','Wallet Euro','3345c835-d684-4b42-957b-6c8f7f765d4b',NOW(),NOW(),1);
  invoice_timeline=$ ALTER TABLE "Invoices" SET "paymentId"=1 WHERE id=1;
  ```

+ Start the microservice
  ```bash
  yarn start
  ```

+ Try it in your browser !

  http://localhost:3000/?query={allInvoices%20{reference%20status%20payment%20{paidAt}%20}}

+ React Front-End client :

  https://invoice-timeline.stackblitz.io/invoices

+ To show/edit the Front-End code :

  https://stackblitz.com/edit/invoice-timeline

  (Click on "Open in new window" in the top-right of the page for better experience)

### License
MIT
