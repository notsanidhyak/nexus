# nexus
### A peer to peer decentralized lending and borrowing solution. 
This project was developed as a part of Hackathon: **HackInfinity 3.0**. <br />
Made with ❤ by Team Phishers+ve.

[Link to Presentation](https://docs.google.com/presentation/d/1LwY5ob_lkBRUrtpoLccnqSxwVQ-G9fw6kkeIrZuEZ0I/edit?usp=sharing)

## Tech Stacks used
* HTML, CSS, JS
* Node.js
* mongoDB
* Web3.js
* Polygon
* Solidity
* Filecoin

## Blockchain Implementation

* Initially when a new user signs up in our website we will
read their meta-mask address and mint a profile Soul
Bound Token (SBT) (an NFT that cannot be transferred). Its
metadata will also contain credit/ reputation score of
users.

* After that if user chooses to borrow, they will be asked to
input amount and token in which they choose to borrow. In
backend this step interacts with our smart contract
deployed on FVM (Filecoin Virtual Machine) and a Borrower
instance is generated.

* As this is a P2P lending, above created instance along with
other borrowers is shown to lender with the credit score
present in metadata of Profile NFT. So, lender can choose
the interest rate based on Credit score and adjust his risk.

* Once lender decides which borrower he wants to lend, he
can then click on Lend button after deciding on interest
rate, this with lead him to signing a transaction and
transferring value directly to borrower through our Smart
contract.


## Back-end Implementation

* Connected the wallet with our application by minting the profile
NFT and deployed it on polygon and store the wallet address on
MongoDB.

* Created smart contract deployed on FVM (Filecoin virtual machine) for the lending/borrowing process. The wallet address of the borrower, amount to be borrowed, credit score and BID(borrower ID) are stored in the mongo server and the BID will be used to fetch and show the details of the borrower to the lender and by entering the BID, the lender can simply choose to lend the amount to whoever he/she wishes.

* The amount will be safely transferred using the smart contract. The sign-up process will only be successful if the profile is not already minted with a soul bound token since it is a NFT which cannot be transferred.


## Images

![Landing Page_2](https://user-images.githubusercontent.com/86651116/217050747-622d27df-e066-400e-9ef4-9768137e9661.png)

![NFT minted](https://user-images.githubusercontent.com/86651116/217053976-372f9001-a1b7-4bbf-bf5f-2df8bd3d08aa.png)

![Lend or Borrow](https://user-images.githubusercontent.com/86651116/217053997-8dbe2e4e-386a-4c4b-a924-fa7c17b190b1.png)

![Borrow Page](https://user-images.githubusercontent.com/86651116/217054018-ad587a9d-b772-4e46-b2dc-98145c9a790e.png)

![image](https://user-images.githubusercontent.com/86651116/216798611-9d374483-5448-4ceb-a483-a75cde092a5e.png)

![image](https://user-images.githubusercontent.com/86651116/216798624-2b4a7038-568b-4c55-a39d-c08f8c867623.png)

![Lend Page](https://user-images.githubusercontent.com/86651116/217054318-a77b5514-beb5-429a-9258-816f673826f4.png)

![image](https://user-images.githubusercontent.com/86651116/216798638-a4e91c4a-f3ee-4b73-a306-1df4ba35c606.png)

![image](https://user-images.githubusercontent.com/86651116/216798648-528e5514-5cc9-4422-a8e6-f5db0e1af7e3.png)

![Who Page](https://user-images.githubusercontent.com/86651116/217055432-3b670946-a182-4758-b362-6c9a427af7eb.png)


**That's all for now folks!**
