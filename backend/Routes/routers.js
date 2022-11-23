const express = require("express");
const {
  denemeRoute,
  getAllRates,
  getSingleRate,
  createRate,
  deleteRate,
  editRate,
  editAnnounce,
  getAnnounce,
  createAnnounce,
  editInformation,
  getInformation,
  createInformation,
  editHeader,
  getHeader,
  createHeader,
  editCurrency,
  deleteCurrency,
  getCurrency,
  addCurrency,
  editCurrencyActivity,
  loginUser,
  registerUser,
  RefreshToken,
  Logout,
  Me
} = require("../Controllers/controller");
const {verifyAccessToken } = require('../helpers/jwt')

const router = express.Router();

router.get("/", denemeRoute);

// Rates

router.get("/rates", getAllRates);
// router.get('rates/:id',getSingleRate);
router.post("/create-rate", createRate);
router.post("/delete-rates", deleteRate);
// router.post('/edit-rate',editRate)

// Theme Settings
// Announce
router.get("/announce", getAnnounce);
router.post("/announce", editAnnounce);
router.post("/announcee", createAnnounce);

// Information

router.get("/information", getInformation);
router.post("/information", editInformation);
router.post("/informationn", createInformation);

// Header

router.get("/header", getHeader);
router.post("/header", editHeader);
router.post("/headerr", createHeader);

// Currency

router.get("/get-currency", getCurrency);
router.post("/edit-currency", editCurrency);
router.post("/edit-currency-activity", editCurrencyActivity);
router.post("/delete-currency", deleteCurrency);
router.post("/create-currency", addCurrency);

// login

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/refresh_token", RefreshToken);
router.get("/me", verifyAccessToken,Me);

module.exports = router;
