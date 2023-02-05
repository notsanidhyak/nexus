# nexus
A peer to peer decentralized lending and borrowing solution.
\n
> Blockchain Implementation:
\n
1. Initially when a new user signs up in our website we will
read their meta-mask address and mint a profile Soul
Bound Token (SBT) (an NFT that cannot be transferred). Its
metadata will also contain credit/ reputation score of
users.

2. After that if user chooses to borrow, they will be asked to
input amount and token in which they choose to borrow. In
backend this step interacts with our smart contract
deployed on FVM (Filecoin Virtual Machine) and a Borrower
instance is generated.

3. As this is a P2P lending, above created instance along with
other borrowers is shown to lender with the credit score
present in metadata of Profile NFT. So, lender can choose
the interest rate based on Credit score and adjust his risk.

4. Once lender decides which borrower he wants to lend, he
can then click on Lend button after deciding on interest
rate, this with lead him to signing a transaction and
transferring value directly to borrower through our Smart
contract.


> Back-end Implementation:

Connected the wallet with our application by minting the profile
NFT and deployed it on polygon and store the wallet address on
MongoDB.

Created smart contract deployed on FVM (Filecoin virtual machine) for the lending/borrowing process. The wallet address of the borrower, amount to be borrowed, credit score and BID(borrower ID) are stored in the mongo server and the BID will be used to fetch and show the details of the borrower to the lender and by entering the BID, the lender can simply choose to lend the amount to whoever he/she wishes.

The amount will be safely transferred using the smart contract. The sign-up process will only be successful if the profile is not already minted with a soul bound token since it is a NFT which cannot be transferred.


> Images:

![image](https://user-images.githubusercontent.com/86651116/216798560-73dc2c2c-374c-4430-9140-3206d5baa36d.png)

![image](https://user-images.githubusercontent.com/86651116/216798568-f9e5a340-dfc6-4e4b-9819-f77bcd74c35f.png)

![image](https://user-images.githubusercontent.com/86651116/216798584-36410f8e-978b-414e-85d9-ebd2a049d4fd.png)

![image](https://user-images.githubusercontent.com/86651116/216798601-f2a917b0-480c-444d-bf9a-137683ab24cb.png)

![image](https://user-images.githubusercontent.com/86651116/216798611-9d374483-5448-4ceb-a483-a75cde092a5e.png)

![image](https://user-images.githubusercontent.com/86651116/216798624-2b4a7038-568b-4c55-a39d-c08f8c867623.png)

![image](https://user-images.githubusercontent.com/86651116/216798628-f087e974-8f98-422f-92e2-475f0b718bf1.png)

![image](https://user-images.githubusercontent.com/86651116/216798638-a4e91c4a-f3ee-4b73-a306-1df4ba35c606.png)

![image](https://user-images.githubusercontent.com/86651116/216798648-528e5514-5cc9-4422-a8e6-f5db0e1af7e3.png)






