const express = require('express');
const app = express();
const billRoute = express.Router();

// Bill model
let Bill = require('../database/model/bills-model.js');

// // Add Bill
billRoute.route('/add-bill').post((req, res, next) => {
  // res.send("bill added successfully.")
  // Bill.create(req.body, (error, data) => {
  //   if (error) {
  //     return next(error)
  //   } else {
  //     res.json(data)
  //   }
  // })
  let newBill = new Bill({
    customerName: req.body.customerName,
    invoiceNumber: req.body.invoiceNumber,
    date: req.body.date,
    mobileNumber: req.body.mobileNumber,
    panNumber: req.body.panNumber,
    gstNumber: req.body.gstNumber,
    mode: req.body.mode,
    address: req.body.address,
    itemsList: req.body.itemsList
  })
  newBill.save((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// // Get all bill
billRoute.route('/bills').get((req, res, next) => {
  // res.send("Receiving bills list")
  Bill.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// // Get single bill
billRoute.route('/read-bill/:id').get((req, res) => {
  Bill.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// // Update bill
billRoute.route('/update-bill/:id').put((req, res, next) => {
  // res.send("Bill successfully updated!")
  Bill.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send({ result: 'Success' });
      console.log('Bill successfully updated!')
    }
  })
});

// // Delete bill
billRoute.route('/delete-bill/:id').delete((req, res, next) => {
  Bill.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: 'Success'
      })
    }
  })
})

module.exports = billRoute;
