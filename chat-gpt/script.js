document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    generatePrompt();
  }
});


function generatePrompt() {
    const msg_ouput_wrapper = document.getElementById("msg_wrapper");

    document.getElementById('msg_ouput').id = ""
    const newmsg_ouput = document.createElement("p");
    newmsg_ouput.id = "msg_ouput"
    msg_ouput_wrapper.appendChild(newmsg_ouput)
    startChat()
}


async function startChat()
{
    let message = $('#msg_input').val();

    let messages = sessionStorage.getItem("bot-message");
    if (messages == null) {
      messages = [{ role: "system", content: "You are ChatGPT, a large language model trained by OpenAI." }];
    } else {
      messages = JSON.parse(messages);
    }
    messages.push({ role: "user", content: message });
  
    var es = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: messages,
            stream: true,
            stop: ["\n\n\n\n\n\n\n\n"],
          }),
        }
      );
  
      const reader = es.body?.pipeThrough(new TextDecoderStream()).getReader();
  
        
      while (true) {
        const res = await reader?.read();
        if (res?.done) {
          let text = $("#msg_ouput").text();
          messages.push({ role: "assistant", content: text });
          sessionStorage.setItem("bot-message",JSON.stringify(messages));
          break;
        }
        const jsonStrings = res?.value.match(/data: (.*)\n\n/g);

        const jsonData = jsonStrings.map((jsonString) => {
        const startIndex = jsonString.indexOf("{");
        const endIndex = jsonString.lastIndexOf("}") + 1;
        const json = jsonString.substring(startIndex, endIndex);
        let data;
          
        try{
          if(json){
            data = JSON.parse(json);
            if(data.choices[0].delta.finish_reason != 'stop')
            {
              let text = data.choices[0].delta.content;
              if(text){  
                let i=0;
                while (i < text.length) {
                  document.getElementById("msg_ouput").innerHTML += text.charAt(i);
                  i++;                    
                }
              }
            }
          }
        }
        catch(ex){
          console.log('error: json');
          console.log(json);
        }
      
        return data;
      });

    }
}