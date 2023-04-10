const AsyncHandler = require("express-async-handler");
const Goal = require("../Model/goalmodal");

const getGoals = AsyncHandler(async (req, res) => {
  let goal = await Goal.find({ user: req.user.id });
  res.status(200).json(goal);
});

const postGoals = AsyncHandler(async (req, res) => {
  if (!req.body.goal) {
    res.status(400);
    throw new Error("please add all fields");
  }
  const goal = await Goal.create({
    goal: req.body.goal,
    user: req.user.id,
  });
  res.status(200).json({
    goal,
  });
});

const updateGoals = AsyncHandler(async (req, res) => {
  let goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("goal not find");
  }
  let updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{
    new:true,
  })
  res.json(updateGoal);
});

const deleteGoals = AsyncHandler(async(req,res)=>{
    const deleteGoal = await Goal.findById(req.params.id);
    if(!deleteGoal){
        res.status(400);
        throw new Error('Goal not Found')
    }
    await deleteGoal.deleteOne();
    res.json({
        _id:deleteGoal.id,
    })
})
module.exports = {
    getGoals,postGoals,updateGoals,deleteGoals
}
