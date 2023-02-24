/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Deterministic JSON.stringify()
const stringify = require('json-stringify-deterministic');
const sortKeysRecursive = require('sort-keys-recursive');
const { Contract } = require('fabric-contract-api');
const utils = require('./utils.js');

class Seafood extends Contract {
    async InitLedger(ctx) {
        const seafoods = [
            {
                catchID: 'seafood1',
                name: 'Tuna',
                weight: '100 lbs',
                harvestDate: '11/20/2022',
                shipID: 'G30A',
                latitude: '43.687685',
                longitude: '-78.248951',
                temperature: '-15C',
                humidity: '95%',
                timestamp: '2022-11-22T17:00:01',
                ConfirmationOfSaleCode: '97',
            },
            {
                catchID: 'seafood2',
                name: 'Lobster',
                weight: '25 lbs',
                harvestDate: '07/15/2022',
                shipID: 'K90B',
                latitude: '32.711471',
                longitude: '136.432143',
                temperature: '-20C',
                humidity: '90%',
                timestamp: '2022-07-17T12:01:22',
                ConfirmationOfSaleCode: '13'
            },
            {
                catchID: 'seafood3',
                name: 'Salmon',
                weight: '30 lbs',
                harvestDate: '06/05/2022',
                shipID: 'Z70E',
                latitude: '58.240242',
                longitude: '-148.160771',
                temperature: '-20C',
                humidity: '92%',
                timestamp: '2022-06-10T09:25:13',
                ConfirmationOfSaleCode: '43',
            },
            {
                catchID: 'seafood4',
                name: 'Eel',
                weight: '55 lbs',
                harvestDate: '12/25/2022',
                shipID: 'W40F',
                latitude: '30.734467',
                longitude: '-75.289413',
                temperature: '-25C',
                humidity: '91%',
                timestamp: '2022-12-28T18:35:40',
                ConfirmationOfSaleCode: '55',
            },
            {
                catchID: 'seafood5',
                name: 'Tilapia',
                weight: '10 lbs',
                harvestDate: '01/18/2022',
                shipID: 'L60Y',
                latitude: '46.577629',
                longitude: '-127.723283',
                temperature: '-15C',
                humidity: '93%',
                timestamp: '2022-01-20T02:19:29',
                ConfirmationOfSaleCode: '34',
            },
            {
                catchID: 'seafood6',
                name: 'Crab',
                weight: '20 lbs',
                harvestDate: '10/29/2022',
                shipID: 'V80T',
                latitude: '59.707835',
                longitude: '0.597310',
                temperature: '-22C',
                humidity: '90%',
                timestamp: '2022-10-31T23:06:10',
                ConfirmationOfSaleCode: '78',
            },
        ];

//         for (const seafood of seafoods) {
//             seafood.docType = 'aquaticLife';

//             await ctx.stub.putState(
//                 seafood.ID,
//                 Buffer.from(stringify(sortKeysRecursive(seafood)))
//             );
//         }
    }

    // AddSeafood adds a new seafood to the seafood list.
    async AddSeafood(ctx, catchID, name, weight, harvestDate, shipID, latitude, longitude, temperature, humidity, ConfirmationOfSaleCode) {
        const exists = await this.SeafoodExists(ctx, catchID);
        if (exists) {
            throw new Error(`The seafood ${catchID} already exists`);
        }

        const validShipVessel = utils.isValidShipVessel(shipID);
        if (!validShipVessel) {
            throw new Error(`The ship Id ${shipID} is invalid`);
        }

        const newSeafood = {
            catchID: catchID,
            name: name,
            weight: weight,
            harvestDate: harvestDate,
            shipID: shipID,
            latitude: latitude,
            longitude: longitude,
            temperature: temperature,
            humidity: humidity,
            timestamp: utils.getCurrentTimestamp(),
            ConfirmationOfSaleCode: ConfirmationOfSaleCode,
        };

        await ctx.stub.putState(catchID, Buffer(stringify(sortKeysRecursive(newSeafood))));
        return JSON.stringify(newSeafood);
    }

    // GetSeafood returns the seafood info stored in the world state with given id.
    async GetSeafood(ctx, catchID) {
        const seafoodJSON = await ctx.stub.getState(catchID); // get the seafood info from chaincode state
        if (!seafoodJSON || seafoodJSON.length === 0) {
            throw new Error(`The customer ${catchID} does not exist`);
        }
//         } else if (JSON.parse(seafoodJSON.toString()).docType !== 'aquaticLife') {
//             throw new Error('Invalid seafood type record');
//         }
        return seafoodJSON.toString();
    }

    // UpdatePrimaryTransit updates an existing seafood primaryId.
    async UpdateSeafoodConfirmationCode(ctx, catchID, shipID, newConfirmationOfSaleCode) {
        // check if the ship vessel is exists or not
        const isValidShipVessel = utils.isValidShipVessel(shipID);
        if (isValidShipVessel) {
            throw new Error(`Invalid ship vessel ${newConfirmationOfSaleCode}`);
        }

        try {
            // fetching the seafood information from the seafoods array
            let seafood = await this.GetSeafood(ctx, catchID);
            // overwriting the seafood primary confirmation sale code
            if (seafood.ConfirmationOfSaleCode === newConfirmationOfSaleCode) {
                throw new Error(`seafood confirmation of sale code is same as update request ${newConfirmationOfSaleCode}`);
            }
            seafood.ConfirmationOfSaleCode = newConfirmationOfSaleCode;
            // we insert data in alphabetic order using 'json-stringify-deterministic' and 'sort-keys-recursive'
            return ctx.stub.putState(catchID, Buffer.from(stringify(sortKeysRecursive(seafood))));
        } catch (err) {
            return err;
        }
    }

    // DeleteSoldSeafood deletes an given seafood from the world state.
    async DeleteSoldSeafood(ctx, catchID) {
        const exists = await this.SeafoodExists(ctx, catchID);
        if (!exists) {
            throw new Error(`The seafood ${catchID} has been sold to the processor.`);
        }
        return ctx.stub.deleteState(catchID);
    }

    // SeafoodExists returns true when asset with given ID exists in world state.
    async SeafoodExists(ctx, catchID) {
        const seafoodJSON = await ctx.stub.getState(catchID);
        return (seafoodJSON && seafoodJSON.length > 0); // check if the JSON is valid and is not empty
    }

    // GetAllSeafood returns all seafood found in the world state.
    async GetAllSeafood(ctx) {
        const results = [];
        const iterator = await ctx.stub.getStateByRange('', '');
        let result = await iterator.next();

        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;

            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            if (utils.isJSON(record)) {
                if (record.docType === 'aquaticLife') {
                    results.push(record);
                }
            } else {
                results.push(record);
            }
            result = await iterator.next();
        }
        return JSON.stringify(results);
    }
}

module.exports = Seafood;
