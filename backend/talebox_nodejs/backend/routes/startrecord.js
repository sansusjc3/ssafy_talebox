var express = require("express");
var app = express.Router();
var spawn = require("child_process").spawn;
const fs = require('fs');
function spawnTest(wordname, hist_num, word_id) {
  return new Promise(function (resolve, reject) {
    // 2. spawn을 이용하여 새 프로세스를 만듭니다.
    let process = spawn("bash");
    //var fr = new FileReader();
    // 3. 실행할 명령을 작성합니다.
    // '\n' 은 엔터입니다. terminal 이기 때문에 엔터로 명령어를 입력해야 실행되겠죠?
    const command = `cd /home/nvidia/STT \n`;
    const command1 = `cp -r Speech-to-Text-G-API ${wordname}${hist_num} \n`; // a: 숨긴 파일까지 , l: 자세한 내용까지 검색
    const command2 = `cd ${wordname}${hist_num}/audio \n`;
    const command3 = `arecord -t wav -c 1 -D plughw:Device,0 -f S16_LE -d 6 -r 44100 test.wav \n`;
    const command4 = `cd .. \n`;
    const command5 = `python3 main.py \n`;
    try {
      // 4. 부모 프로세서에서 자식프로세서로 명령을 보냅니다.
      process.stdin.write(command);
      process.stdin.write(command1);
      process.stdin.write(command2);
      process.stdin.write(command3);
      setTimeout(function(){
          process.stdin.write(command4);
          process.stdin.write(command5);
	  setTimeout(function(){
	    //  let text = fr.readAsText(`home/nvidia/STT/${wordname}${hist_num}/text/test.txt`);
              fs.readFile(`home/nvidia/STT/${wordname}${hist_num}/text/test.txt`,'utf8',data=>{
    	          let text = data;
	      })
              let result = text.includes(`${wordname}`);
	      axios({
                  method:'post',
		  url:`i8c101.p.ssafy.io/api/history/wordresult/${word_id}`,
		  data:{
                      "audioPath": `/home/nvidia/STT/${wordname}${hist_num}/audio/`,
		      "historyid": `${hist_num}`,
		      "isCorrect": result,
		      "wordid" : `${word_id}`
		      }
	           })
	       },40000)
           },7000)
      //spawn('python3',[ 'main.py']);
      // stdin을 이용할때는 end()로 반드시 입력을 끝내야합니다
      process.stdin.end();
      // 5. 명령이 모두 실행됐다면 'close' 이벤트가 발생합니다.
      process.on("close", function (code) {
        console.log("exec_end");
        resolve(code);
      });
    } catch (err) {
      console.log("error");
      reject(err);
    }
  });
}

app.get("/", function (req, res) {
  let { wordname, hist_num, word_id} = req.query;
  spawnTest(wordname, hist_num,  word_id);
  res.json({ success: "downloaded" });
});

module.exports = app;
