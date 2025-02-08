const express = require("express");
const Patient = require("../DB/PatientSchema");
const upload = require("../middlewares/upload");
const cloudinary = require("../config/cloudinary");

const router = express.Router();

// Register Patient
router.post("/register", upload.single("profilePicture"), async (req, res) => {
  try {
    let profileUrl = "";
    
    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
          if (error) reject(error);
          resolve(result);
        }).end(req.file.buffer);
      });
      profileUrl = result.secure_url;
    }

    const newPatient = new Patient({
      NID: req.body.NID,
      password: req.body.password,
      profilePicture: profileUrl,
      fullName: req.body.fullName,
      dateOfBirth: req.body.dateOfBirth,
      contactNumber: req.body.contactNumber,
      bloodGroup: req.body.bloodGroup,
      allergicReaction: req.body.allergicReaction,
      specialConsiderations: req.body.specialConsiderations,
      pregnancyStatus: req.body.pregnancyStatus
    });

    await newPatient.save();
    res.status(201).json({ message: "Patient registered successfully", newPatient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
