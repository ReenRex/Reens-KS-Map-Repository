body{
  font-family: "Times New Roman", Times, serif;
  background: #ffffff;
  color: #000000;
  max-width: 700px;
  margin: 40px auto;
  padding: 0 20px;
  font-size: 17px;
  line-height: 1.6;
}
h1{
  font-size: 26px;
  margin-bottom: 4px;
}
p.intro{
  margin-top: 0;
  margin-bottom: 20px;
}
.breadcrumb{
  margin-bottom: 20px;
  font-size: 15px;
}
.breadcrumb a{
  color: #0000EE;
  text-decoration: underline;
}
ul{
  list-style-type: disc;
  padding-left: 25px;
}
li{
  margin-bottom: 8px;
}
a{
  color: #0000EE;
  text-decoration: underline;
  cursor: pointer;
}
a:visited{
  color: #551A8B;
}
hr{
  margin: 25px 0;
}
.tutorial-link{
  font-size: 15px;
  margin-left: 10px;
}
.modal-overlay{
  display: none;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.45);
  z-index: 100;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
  overflow-y: auto;
}
.modal-overlay.open{
  display: flex;
}
.modal-box{
  background: #ffffff;
  border: 1px solid #000000;
  max-width: 600px;
  width: 100%;
  padding: 20px;
}
.modal-header{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid #000000;
  padding-bottom: 8px;
  margin-bottom: 15px;
}
.modal-header h2{
  font-size: 20px;
  margin: 0;
}
.modal-close{
  font-size: 15px;
}
.tutorial-intro{
  margin: 0 0 20px;
  font-size: 15px;
  font-style: italic;
}
.tutorial-step p{
  margin: 6px 0 0;
  font-size: 15px;
}
.screenshot-placeholder{
  border: 1px dashed #666;
  background: #f2f2f2;
  color: #666;
  text-align: center;
  padding: 40px 10px;
  font-size: 14px;
}
.tutorial-step img{
  max-width: 100%;
  border: 1px solid #000000;
  display: block;
}
