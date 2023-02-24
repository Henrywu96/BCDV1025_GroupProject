## Project Description
- Seafood supply chain.
- Tracking the seafood supply chain stages from manufacturing to processing, processing to transportation, and transportation to retailers.

- Stages in the supply chain are manufacturing (fishing boats & farms), processing (packaging of aquatic life into products), transportation (trucks that deliver seafood products), and retailers (grocery stores, seafood markets, restaurants, etc).

- Three channels would be implemented.
    - Channel 1: manufacturers & processing.
    - Channel 2: processing & transportation.
    - Channel 3: transportation & retailers.

### Teams
Group 4: Joseph 101058760, Min-Tzu 101453248, Harshdeep 101442299


### Requirements
- AddSeafood(ctx, catchID, name, weight, harvestDate, shipID, latitude, longitude, temperature, humidity, ConfirmationOfSaleCode)
- GetSeafood(ctx, catchID)
- UpdateSeafoodConfirmationCode(ctx, catchID, shipID, newConfirmationOfSaleCode)
- DeleteSoldSeafood(ctx, catchID)
- SeafoodExists(ctx, catchID)
- GetAllSeafood(ctx)


### Reasons
1. Seafood mislabelling (difficult to trace the source).
2. Uncontrolled and unreported fishing activities (poaching and species restrictions).
3. Unsuitable food storage circumstances (temperature, humidity, etc).
4. Supply chains with seafood are often complex.
5. Almost impossible to fully trace a seafood product during its life cycle through the various
6. stages of the supply chain, without using a blockchain.
7. Health benefits that come with a fully traceable system.
8. Improved trade.
9. Trust from the public.
10. Reduced product recall.

### Chaincode Functions/Permissions for Manufacturers, Processors, Transporters, and Retailers
- Manufacturers should be able to
    1) Submit information such as catch ID, species name, weight, harvest date, characteristics, ship vessel name, longitude, latitude, timestamp, quotas (what they are allowed to catch), quantities (how much they actually did catch), status (if the ship was damaged), etc, into the blockchain.
    2) View all the captured aquatic life.
    3) Query all aquatic life catches.
    4) Query aquatic life catches by parameters (catch number, timestamp, catch location, vessel name, fisherman name).

- Processors should be able to
    1) Query all aquatic life catches.  
    2) Query aquatic life catches by parameters.  
    3) Submit information such as  packaged date, best before date, general information about the product (nutritional facts, steps for cooking, company info, etc), quantity and quality of the products available to be shipped after processing,  to the blockchain.

- Transporters should be able to
    1) Submit information such as truck driver ID, transportation time, transfer of vehicle to another staff member (specify the ID of the new driver and when the crew change took place, container ID, driver status (who is available to drive), vehicle status (how many are available), to the blockchain.

- Retailers should be able to
    1) Place an order through the blockchain, which gets fulfilled by processors (retailers specify what they want, the quantity of what they want, payment, location(s) to deliver to, etc).
        - The processors would then need to be able to specify when they can fulfill that order and the order number.

### Sequence Diagram
![seaqunce diagram](../img/sequence_diagram.png)



### Snapshots of application
![Alt text](../img/snapshot1.png)
![Alt text](../img/snapshot2.png)