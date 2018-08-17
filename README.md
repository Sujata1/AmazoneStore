Project: Amazon_Store

#  amazon_store
 This app manages  Amazon-like storefront.
 This app will 
 Take in orders from customers and deplete stock from the store's inventory. 
 Track product sales across store's departments
 Provides summary of the highest-grossing departments in the store.

# Commands to use this app
## p.s. Product validation, Integer validation, Float Validation is same across all the options. I have not repeated these validations for each module. Please find all validation in Customer module. I have provided information of validations specific to other modules
# 1.  Customers

a. Run command "node bamazonCustomer.js".
   App will show products available for sale.
 
  ![amazoncustomerig1](https://user-images.githubusercontent.com/5023549/44230285-ba5b0c80-a168-11e8-91f5-8e6652f013bc.png)
     

 b. Enter product id and quantity you would like to purchase.
    App will give error if store has insufficient quantity and prompt you to enter another quantity.
 
   ![amazoncustomerfig2](https://user-images.githubusercontent.com/5023549/44231143-19ba1c00-a16b-11e8-8e9a-b3a36c2bc50e.png)
      
 c. Customer will be prompted for wrong product ID and invalid order quanntity (Check following images).
 
   ![amazoncustomerig3](https://user-images.githubusercontent.com/5023549/44231046-dbbcf800-a16a-11e8-9008-77f059eb2c1e.png)

   ![amazoncustomerig4](https://user-images.githubusercontent.com/5023549/44231796-496a2380-a16d-11e8-9640-3366f93aabe2.png)

 c. If no errors then order will be accespted and app will show invoice details to customer.

   ![amazoncustomerig5](https://user-images.githubusercontent.com/5023549/44231797-496a2380-a16d-11e8-8bce-5c64ee131532.png)

 d. At this point you may continue to order more prodcucts or exit. 

# 2. Manager
  
a. Run command "node bamazonManager.js. Select from following options.

![amazonmanagerfig1](https://user-images.githubusercontent.com/5023549/44232632-a23abb80-a16f-11e8-8185-868502309904.png)


b. View Product Sales.


![amazonmanagerfig2](https://user-images.githubusercontent.com/5023549/44232633-a23abb80-a16f-11e8-8044-fed96791476b.png)

c. View Low inventory products


![amazonmanagerfig3](https://user-images.githubusercontent.com/5023549/44232634-a2d35200-a16f-11e8-866e-deee11dcb8e6.png)

d. Add To Inventory

![amazonmanagerfig4](https://user-images.githubusercontent.com/5023549/44233888-1a56b080-a173-11e8-9a56-359ddcfce925.png)

![amazonmanagerfig5](https://user-images.githubusercontent.com/5023549/44233889-1a56b080-a173-11e8-90ff-c49339196541.png)



e. Add New Product


![amazonmanagerfig6](https://user-images.githubusercontent.com/5023549/44283960-ef7d6280-a22d-11e8-9444-fca5fc9b7926.png)

 App will give error if product already exists in product table.
 
![amazonmanagerfig7](https://user-images.githubusercontent.com/5023549/44283961-ef7d6280-a22d-11e8-9b5d-d78f612f468d.png)

Re-enter product

![amazonmanagerfig9](https://user-images.githubusercontent.com/5023549/44286380-e644c380-a236-11e8-9c14-34a753e81445.png)

Following message is shown if product is added successfully

![amazonmanagerfig8](https://user-images.githubusercontent.com/5023549/44283963-f015f900-a22d-11e8-8289-ba9694a6d202.png)

 
 # 3. Supervisor
 
a. Run command "node bamazonSuperVisor.js. Select from following options.

![amazonsupervisor1](https://user-images.githubusercontent.com/5023549/44287506-11c9ad00-a23b-11e8-97c3-2c091d9bc3a4.png)

b. View Prodcut sles by Department

![amazonsupervisor2](https://user-images.githubusercontent.com/5023549/44287507-11c9ad00-a23b-11e8-92d2-6e2f2c5dd304.png)

c. Add new Department

![amazonsupervisor3](https://user-images.githubusercontent.com/5023549/44287508-11c9ad00-a23b-11e8-8c28-c0c56dd15630.png)

App will give error if department already exists in deaprtments table.


![amazonsupervisor4](https://user-images.githubusercontent.com/5023549/44287509-11c9ad00-a23b-11e8-8d29-3b03fe51a6f7.png)
 

