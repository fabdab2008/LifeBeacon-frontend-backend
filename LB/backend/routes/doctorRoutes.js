const express = require("express");
const Doctor = require("../DB/DoctorSchema");
const router = express.Router();
const upload = require("../middlewares/upload");
const cloudinary = require("../config/cloudinary");


// Register Doctor
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

    const newDoctor = new Doctor({
      NID: req.body.NID,
      password: req.body.password,
      profilePicture: profileUrl,
      fullName: req.body.fullName,
      dateOfBirth: req.body.dateOfBirth,
      contactNumber: req.body.contactNumber,
      specialization: req.body.specialization,
      qualifications: req.body.qualifications,
      experience: req.body.experience,
      registrationNumber: req.body.registrationNumber,
      languages: req.body.languages.split(","),
      consultationStartTime: req.body.consultationStartTime,
      consultationEndTime: req.body.consultationEndTime,
      awards: req.body.awards,
      research: req.body.research,
      socialLinks: req.body.socialLinks
    });

    await newDoctor.save();
    res.status(201).json({ message: "Doctor registered successfully", newDoctor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
