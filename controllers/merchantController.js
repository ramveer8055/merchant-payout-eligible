const db = require('../models')
const { Sequelize } = require('sequelize')

const Merchant = db.merchants
const Transaction = db.transactions
const Payout = db.payouts

const oneToMany = async (req, res) => {
    let data = await Merchant.findAll({
        attributes: [
            'id',
            'eligible',

        ],
        include: {
            model: Transaction
        }
    })
    let response = {
        status: true,
        data: data,
    }
    res.status(200).json(response)
}

const payOut = async (req, res) => {
    let data = await Transaction.findAll({
        attributes: [
            // 'mid',
            [Sequelize.fn('sum', Sequelize.col('amount')), 'total_amount'],
        ],
        group: ['mid'],
        where: {
            status: "success"
        },
        include: {
            model: Merchant,
            attributes: ['id'],
            where: {
                eligible: true
            }
        }

    })

    data.forEach(data => {
        amount = data.dataValues.total_amount
        mid = data.dataValues.merchant.dataValues.id
        Payout.create({ mid: mid, amount: amount });
    })

    let response = {
        status: true,
        messages: 'payout paid'
    }
    res.status(200).json(response)
}

module.exports = {
    oneToMany,
    payOut
}