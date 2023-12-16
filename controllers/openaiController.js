const dotenv = require("dotenv");
dotenv.config();


// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

const OpenAI =  require("openai");

const openai = new OpenAI({
  apiKey: "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"
});

exports.summaryController = async(req, res)=>{
  try{
    const { text } = req.body;
    const{data} = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      // messages: [{"role": "user", "content": "Summarise this"}],
      prompt: `Summarise this \n${text}`,
      max_tokens: 500,
      temperature: 0.5,
    });
    if(data){
      if(data.choices[0].text){
        return res.status(200).json(data.choices[0].text);
      }
    }
  }
  catch(err) {
    console.log(err);
    return res.status(404).json({message: err.message,});
  }  
};

exports.paragraphController = async(req, res)=>{
  try{
    const { text } = req.body;
    const{data} = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      // messages: [{"role": "user", "content": "Summarise this"}],
      prompt: `write a detail paragraph about \n${text}`,
      max_tokens: 500,
      temperature: 0.5,
    });
    if(data){
      if(data.choices[0].text){
        return res.status(200).json(data.choices[0].text);
      }
    }
  }
  catch(err) {
    console.log(err);
    return res.status(404).json({message: err.message,});
  }  
};

exports.chatbotController = async(req, res)=>{
  try{
    const { text } = req.body;
    const{data} = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      // messages: [{"role": "user", "content": "Summarise this"}],
      prompt: `Answer question similar to how yoda from star war would.
      Me: 'what is your name?'
      yoda: 'yoda is my name'
      Me: ${text}`,
      max_tokens: 300,
      temperature: 0.7,
    });
    if(data){
      if(data.choices[0].text){
        return res.status(200).json(data.choices[0].text);
      }
    }
  }
  catch(err) {
    console.log(err);
    return res.status(404).json({message: err.message,});
  }  
};

exports.jsconverterController = async(req, res)=>{
  try{
    const { text } = req.body;
    const{data} = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      // messages: [{"role": "user", "content": "Summarise this"}],
      prompt: `/* convert these instruction into javascript code \n${text}`,
      max_tokens: 400,
      temperature: 0.25,
    });
    if(data){
      if(data.choices[0].text){
        return res.status(200).json(data.choices[0].text);
      }
    }
  }
  catch(err) {
    console.log(err);
    return res.status(404).json({message: err.message,});
  }  
};
  

exports.scifiImageController = async(req, res)=>{
  try{
    const { text } = req.body;
    const{data} = await openai.Image.create({
      prompt: `generate a scifi image of ${text}`,
      n: 1,
      size: "512x512",
    });
    if(data){
      if(data.choices[0].url){
        return res.status(200).json(data.choices[0].text);
      }
    }
  }
  catch(err) {
    console.log(err);
    return res.status(404).json({message: err.message,});
  }  
};
  




// const chatCompletion = await openai.chat.completions.create({
 
// });
// console.log(chatCompletion.choices[0].message);