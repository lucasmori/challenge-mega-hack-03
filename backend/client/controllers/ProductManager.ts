import { Request, Response } from "express";
import { Contract } from "fabric-network";
import { ContractManager } from "./TransactionManager";

/**
 * @nickZanutim
 */
export class ProductManager {
  public async getProduct(req: Request, res: Response) {
    if (req.body === undefined) {
      throw new Error("Invalid JSON");
    }
    const user = req.body.user;
    const platform = req.body.platform;

    try {
      const contractManager: ContractManager = new ContractManager();
      const contract: Contract = await contractManager.getContract(
        user,
        req,
        res
      );

      const result = await contract.submitTransaction(
        "queryBlockchain",
        user,
        platform
      );

      console.log(
        "Product Manager getProduct Result",
        result.toString().replace(/\\/g, "")
      );

      var jsonResponse = JSON.parse(result.toString());

      res.status(200).send(JSON.parse(jsonResponse));
    } catch (error) {
      console.log(error.toString());
      res.status(500).send(error.toString());
    }
  }
}

export default ProductManager;
