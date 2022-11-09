var counter = 0;
var snd = new Audio("data:audio/mp3;base64,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SwC6AAMYAgAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7cGR1D/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+3JkdI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7cGR1D/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+3BkdQ/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tyZHSP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+3BkdQ/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tyZHSP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+3BkdQ/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tyZHSP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=");  

function beep() {
  snd.play();
}

function chat(e) {
  e.preventDefault();
  const message = $("#message").val();
  if (!message.trim()) {
    return;
  }
  $("#message").val("");
  insertChat(true, message);
  var formData = {
    id: chatId,
    text: message,
  };
  $.ajax({
    method: "POST",
    url: API_URL + "/chat",
    headers: {
      Authorization: "Bearer " + user.token,
    },
    data: JSON.stringify(formData),
    dataType: "json",
    contentType: "Application/json",
    success: function (data) {
      for (const action of data.actions) {
        switch (action.action) {
          case "recommend":
            getRecommendation('#infiniteDiv', true);
          case "answer":
            insertChat(false, action.text);
            break;
        }
      }
    },
    error: function (request) {
      if (request.status == 401) {
        localStorage.removeItem("User");
        window.location.replace("/login.html");
      }
    },
  });
}

function chatInit() {
  $.ajax({
    method: "POST",
    url: API_URL + "/chat/init",
    headers: {
      Authorization: "Bearer " + user.token,
    },
    dataType: "json",
    contentType: "Application/json",
    success: function (data) {
      chatId = data.id;
      sessionStorage.setItem("Chat", data.id);
    },
    error: function (request) {
      if (request.status == 401) {
        localStorage.removeItem("User");
        window.location.replace("/login.html");
      }
    },
  });
}

function getBest() {
  $.ajax({
    method: "GET",
    url: API_URL + "/recommend/best",
    headers: {
      Authorization: "Bearer " + user.token,
    },
    dataType: "json",
    contentType: "Application/json",
    success: function (data) {
      if (!data.message) {
        insertRecomm(data.img);
      }
    },
    error: function (request) {
      if (request.status == 401) {
        localStorage.removeItem("User");
        window.location.replace("/login.html");
      }
    },
  });
}

function insertChat(me, text) {
  var date = new Date();

  $("#chat-target")
    .append(
      `<div class="col-12">
        <div class="${me ? "msj-rta" : "msj"} macro">
          <div class="text ${me ? "text-r" : "text-l"}">
            <p>${text}</p>
            <p><small>${date.toLocaleString()}</small></p>
        </div>
      </div>`
    )
    .scrollTop($("#chat-target").prop("scrollHeight"));
    beep();
}

function insertRecomm(product) {
  var date = new Date();
  $("#chat-target")
    .append(
      `<div class="col-12">
        <div class="msj macro">
          <div class="text text-l">
            <div class="row">
              <a class="d-flex justify-content-center" data-bs-toggle="modal" data-bs-target="#chat${product.id}">
                <img src="https://static.andrebezerra.com/${product.name}" class="img-fluid">
              </a>
              <div id="chat${product.id}" class="modal fade">
                <div class="modal-dialog modal-lg" role="content">
                  <div class="modal-content">
                    <span data-bs-dismiss="modal" class="close text-right">×</span>
                    <img class="imgZoom align-self-center" src="https://static.andrebezerra.com/${product.name}">
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="btn-group">
                <input type="radio" class="btn-check" name="chat-btn${product.id}" id="chat-like${product.id}" autocomplete="off">
                <label class="btn btn-success" for="chat-like${product.id}" onclick="like('${product.name}');"><span class="fa fa-thumbs-up"></span></label>
                <input type="radio" class="btn-check" name="chat-btn${product.id}" id="chat-dislike${product.id}" autocomplete="off">
                <label class="btn btn-danger" for="chat-dislike${product.id}" onclick="dislike('${product.name}');"><span class="fa fa-thumbs-down"></span></label>
              </div>
            </div>
            <p><small>${date.toLocaleString()}</small></p>
        </div>
      </div>`
    )
    .scrollTop($("#chat-target").prop("scrollHeight"));
}
