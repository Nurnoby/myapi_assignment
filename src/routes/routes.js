// adding express 
const express=require('express');
// adding controller with path 
// const helloCrontroller=require("../controllers/helloController")
const blogController=require("../controllers/blogController")
const blogDetailsController=require("../controllers/blogDetailsController")
const commentController=require("../controllers/commentController")
const messageController=require("../controllers/messageController")
const portfolioController=require("../controllers/portfolioController")
const productController=require("../controllers/productController")
const profitController=require("../controllers/profitController")
const projectController=require("../controllers/projectController")
const serviceController=require("../controllers/serviceController")
const titleController=require("../controllers/titleController")

// creating router instant 
const router= express.Router();

// blog controller route 
router.get("/createBlogAPI", blogController.create);
router.get("/readBlogAPI", blogController.read);
router.get("/deleteBlogAPI", blogController.delete);
router.get("/updateBlogAPI", blogController.update);
// blog details controller route 
router.get("/createBlogDetailsAPI", blogDetailsController.create);
router.get("/readBlogDetailsAPI", blogDetailsController.read);
router.get("/deleteBlogDetailsAPI", blogDetailsController.delete);
router.get("/updateBlogDetailsAPI", blogDetailsController.update);
// comment controller route 
router.get("/createCommentAPI", commentController.create);
router.get("/readCommentAPI", commentController.read);
router.get("/deleteCommentAPI", commentController.delete);
router.get("/updateCommentAPI", commentController.update);
// message controller route 
router.get("/createMessage", messageController.create);
router.get("/readMessage", messageController.read);
router.get("/deleteMessage", messageController.delete);
router.get("/updateMessage", messageController.update);
// portfolio controller route 
router.get("/createPortfolio", portfolioController.create);
router.get("/readPortfolio", portfolioController.read);
router.get("/deletePortfolio", portfolioController.delete);
router.get("/updatePortfolio", portfolioController.update);
// product controller route 
router.get("/createProduct", productController.create);
router.get("/readProduct", productController.read);
router.get("/deleteProduct", productController.delete);
router.get("/updateProduct", productController.update);
// profit controller route 
router.get("/createProfit", profitController.create);
router.get("/readProfit", profitController.read);
router.get("/deleteProfit", profitController.delete);
router.get("/updateProfit", profitController.update);
// project controller route 
router.get("/createProject", projectController.create);
router.get("/readProject", projectController.read);
router.get("/deleteProject", projectController.delete);
router.get("/updateProject", projectController.update);
// services controller route 
router.get("/createService", serviceController.create);
router.get("/readService", serviceController.read);
router.get("/deleteService", serviceController.delete);
router.get("/updateService", serviceController.update);
// title controller route 
router.get("/createTittle", titleController.create);
router.get("/readTittle", titleController.read);
router.get("/deleteTittle", titleController.delete);
router.get("/updateTittle", titleController.update);


// exporting router module 
module.exports=router;