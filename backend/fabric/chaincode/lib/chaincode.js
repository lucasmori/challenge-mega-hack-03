'use strict';

const { Contract } = require('fabric-contract-api');

class Chaincode extends Contract {

    async initLedger(ctx) {
        console.info('Initialized Ledger');
    }

    async queryBlockchain(ctx, user, platform) {

        let iterator = await ctx.stub.getStateByPartialCompositeKey(user, [platform]);

        const allResults = [];
        while (true) {
            const res = await iterator.next();
            console.log("res ", res.value);
            if (res.value && res.value.value.toString()) {
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString('utf8'));
                    console.log("RECORD ", Record.toString());

                    allResults.push(Record);

                } catch (err) {
                    console.log(err);
                }
            }
            if (res.done) {
                iterator.close();
                return JSON.parse(JSON.stringify(allResults));
            }
            console.log("allResults ", allResults.toString());
            return allResults;
        }
    }

    async invokeTransaction(ctx, user, platform, jsonPayload) {

        let key = ctx.stub.createCompositeKey(user, [platform]);
        console.log("COMPOSITE KEY ", key);

        await ctx.stub.putState(key, JSON.stringify(jsonPayload));
        console.info('Transaction commited to the ledger');
    }
}

module.exports = Chaincode;
