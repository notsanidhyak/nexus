# nexus
A peer to peer decentralized lending and borrowing solution.

> Blockchain Implementation:

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




