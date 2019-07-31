const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Pulls in validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Pulls in user model
const User = require("../../models/User");
