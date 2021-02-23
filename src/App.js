import React, {Component} from 'react';
import './App.css';
class App extends Component {
  state = { 
    value: "0",
    header_text: "",
    header: false,
    message: "",
    header_counter: 0,
    message_status: false,
    message_value: "",
    article_counter: 0,
    br: <br/>
  }
  messages = [{
    id: 0,
    txt: "Wybierz jedną z opcji :D"
},
    {
    id: 1,
    txt: `Soniusiuniuniu, 

    jeśli wybrałaś tą opcje to znaczy, że wydarzyło się coś co cię zasmuciło.  Pewnie teraz smutne myśli przejmują nad Tobą kontrolę. Możliwe że straciłaś coś cennego lub czujesz się przytłoczona albo rozczarowana przez kogoś(mam nadzieję, że nie zrobiłem niczego głupiego). Niezależnie od tego z jakiej przyczyny się tak czujesz musisz wiedzieć, że zawsze jestem z Tobą i jeśli jeszcze nie powiedziałaś mi o co chodzi to proszę żebyś to zrobiła, ale jeśli z jakiegoś powodu nie chcesz mi o tym mówić to pamiętaj że, czasami życie jest na prawdę trudne i każdy miewa gorsze momenty od których chce się uciekać, jednak najzdrowszym sposobem będzie pozwolić poczuć w sobie smutek, aby uwolnić cały ten emocjonalny ból, który nosisz w sobie.  Jeśli natomiast obwiniasz się za coś albo uważasz że nie jesteś dość dobra to musisz wiedzieć, że jesteś najwspanialsza osobą jaką znam. Nie wiem dlaczego Bóg postawił mnie akurat na Twojej drodze ale jestem mu cholernie wdzięczny. Nie znam drugiej tak bezinteresownej, szczerej, uczciwej i dobrej osoby. Zapomniałem powiedzieć, że jeszcze TOP MODEL kurwa wygrany i w dodatku jesteś bardzo mądra i utalentowana. Nie wiem czy jest druga osoba na świecie która ma wszystkie te pozytywne cechy razem. Powinnaś być cholernie dumna z siebie! Pamiętaj, że jesteś Sonią Klabisz i że jesteś KURWA ZAJEBISTA i ze wszystkim sobie poradzisz!           Kocham cię`
},
{
    id: 2,
    txt: `Skarbie, 
    Jesteś szczęśliwa, to najlepsza informacja jaką mogłem dostać. Zaraz program wyślę mi sms żebym mógł się cieszyć razem z Tobą :D. Być może osiągnęłaś coś niesamowitego i mówisz sobie "ALE JESTEM ZAJEBISTA" no i masz rację!! albo wydarzyło się coś dobrego, ale znając Ciebie i radość jaką ci dają małe rzeczy to pewnie będziesz często tu zaglądać. Cokolwiek to było chciałbym żebyś wiedziała że jestem z Ciebie strasznie dumny. I jesteś dla mnie wzorem do naśladowania prawie pod każdym względem. Ale sama też musisz być z siebie dumna, tak jak teraz! Musisz wiedzieć, że jesteś wspaniała, wartościową osobą i osiągniesz wszystko co tylko sobie zaplanujesz. Jeśli tylko będziesz chciała to nawet programowanie ogarniesz lepiej niż ja. I to mnie martwi :D. Jeśli Ty jesteś szczęsliwa to ja też niezależnie od tego jaki mam humor, taki masz na mnie wpływ. Chociaż jak tu nie być szczęśliwym kiedy ma się taką dziewczyne jak Ty. Nawet jak to piszę mam łzy w oczach myśląc o tym jakie mam szczęscię że Bóg postawił Cię na mojej drodze. Chciałbym żeby uśmiech był zawsze na Twojej twarzy.
    Kocham Cię.`
},
{
    id: 3,
    txt: `Kochanie, 
    prawdopodobnie czeka Cię na prawdę ciężkie wyzwanie z którym nie wiesz czy się uporasz. Ale pomyśl kto inny da radę jak nie Ty? No nikt. Chociaż często na siebie narzekasz i gadasz różne głupoty to w głębi duszy dobrze wiesz, że jeśli tylko się postarasz możesz zrobić wszystko, cokolwiek postawisz sobie za cel, zrobisz to bez problemu. Czasem ogranicza cię strach i stres, jednak życie to życie i często wartościowe rzeczy nie przychodzą łatwo. Trzeba pracować i wierzyć w sukces. Nawet nie wierzyć, ale być PEWNYM SUKCESU. Takie myślenie da Ci sporo energii i chęci do trudnych zadań które w przyszłości mogą się opłacić. Unikanie problemów i trudności to takie trochę chowanie się pod dywan, tak czy inaczej będziesz musiała stawić im czoła albo przygotowana albo wystraszona. A chyba nie muszę ci mówić która Sonia poradzi sobie lepiej. Każdy egzamin, trudna decyzja życiowa, pokonanie lęków. To wszystko sytuacje, od których chciałbym Cię uchronić ale niestety nie mogę. Nawet jeśli wydaje Ci się, że walczysz sama przeciwko całemu światu. Pamiętaj, że nigdy nie jesteś sama. Zawsze są z Tobą osoby, które Cie kochaja. Ja, rodzice, przyjaciele zawsze jesteśmy przy Tobie i możesz na nas polegać. Mimo że często się boisz to wiem, że jesteś silna i niezależna i poradzisz sobie w każdej sytuacji w jakiej postawi Cię życie. Kocham Cię!`
},
{
    id: 4,
    txt: `Skarbie,
    jeśli to czytasz to znaczy, że się pokłóciliśmy i chciałbym zebyś się  dowiedzieła co myśle.. Niestety czasem bywa tak, że jedno z nas ma gorszy dzień i się zdenerwuje na drugiego. To nic złego przecież kłótnia to nieodłączny element każdego związku, warto czasem wymienić się swoimi przemyśleniami, żeby następnego dnia postarać się to zmienić i żyć dalej w zgodzie. Mimo wszystko nie cierpię sie z Tobą kłócić. Nawet jeśli teraz wydaje Ci się, że jestem zły i niedobry to wiesz dobrze, że jesteś dla mnie wszystkim. Moim całym światem a kłóce się z Tobą tylko dlatego, żeby czasem poprawić niektóre rzeczy, po to żeby nam obojgu było lepiej. Mam nadzieję, że wszystko i tak się ułoży niezależnie od tego kto zawinił. To co razem zbudowaliśmy i te wszystkie chwile i wspomnienia spędzone z Tobą. Nie chciałbym tego stracić przez jakąś głupią kłótnie. Nasza miłość jest silna i przetrwa każdą próbę na którą wystawi ją los. Wystarczy że będziemy słuchać siebie nawzajem i wszystko będzie dobrze. Chce żebyś wiedziała, że nigdy nikogo tak bardzo nie kochałem, każda nawet nieprzyjemna dla mnie czynność jak choćby spacer czy nauka. Z tobą staje się fajna. Chciałbym być z Tobą już zawsze i spędzać z Tobą jak najwięcej czasu bo jak tylko Cię widze to czuje takie ciepło w sercu i nie da się tego nawet opisać słowami. `
},
{
    id: 5,
    txt: `Kochanie,
    jeśli tu jesteś pewnie zastanawiasz się co o Tobie myśle, od razu mówie, że wszystko to co napisałem jest w 100% szczere a nie wymyślone z dupska.
    Najpierw powiem Ci o twoich wadach bo jest ich zdecydowanie więcej, hehe oczywiks żartuje. Zaczniemy od zalet, także lepiej usiądź wygodnie bo to troche potrwa :).
    Zacznijmy od charakteru. Masz w sobie cechy, które najbardziej cenie u ludzi czyli szczerość niezależnie od sytuacji, uczciwość i czyste serce. Poza tym jesteś mądra, sprytna, umiesz radzić sobie z problemami tylko czasem paraliżuje Cię strach, umiesz pysznie gotować ale rzadko mi coś robisz smakówka. Jesteś kreatywna i masz w sobie dużo empatii.
    Do tego dochodzi jeszcze wielki talent muzyczny, uwielbiam cię słuchać jak śpiewasz i chciałbym żebyś częściej mi śpiewała. oooo np na dobranoc coś tam heh :D.
    Natomiast jeśli chodzi o wygląd to chyba nie musze Ci nic mówić bo masz lustro w domu i widzisz, że każdy chłopak się za Tobą ogląda. Chcieliby mi Cię zabrać ale nie ma tak łatwo z pendziachowskim. A jak czasem się wkurzasz że mam jakąś laske na tiktoku albo insta polajkowaną to ja po prostu lajkuje film, wyglądowo to nawet do pięt ci żadna nie dorasta i mogą ci possać co najwyżej.
    Co do wad też będę szczery ale no niestety każdy je ma. Myśle, że tutaj warto było by wspomnieć o strachu przed wyzwaniami i braku asertywności kiedy ktoś robi coś co ci się nie podoba. Więcej wad nie masz moim zdaniem. A tych które wymieniłem bez problemu się kiedyś pozbędziesz bo JESTEŚ WIELKA !!! KOCHAM CIĘ
    `
}
]
  txt= "Hej Soniuś!";
  handleText=()=>{
  this.setState({
    header_text: this.state.header_text + this.txt[this.state.header_counter],
    header_counter: this.state.header_counter + 1,
  })
  
  if(this.txt.length === this.state.header_counter){
    clearInterval(this.ind)
    setTimeout(() => {
      this.setState({
        status: !this.state.status
      })
    clearInterval(this.cursor)
    }, 2000);
  }
  }
  handleCursor=()=>{
    const cursor = document.querySelector('.cursor')
    cursor.classList.toggle('active');
  }
  handleChange=(e)=>{
    clearInterval(this.suka)
    this.setState({
      value: "",
      message_value: "",
      article_counter: 0,
      message_status: false,
    })
    this.setState(prev=>({
      value: e.target.value,
      message_status: !prev.message_status
    }))
    this.handleBitch()
  }
 
  handleBitch=()=>{
    this.trzeci = setInterval(()=>{
      if(this.state.value==="0"){
        const cursor2 = document.querySelector('.spanik');
        cursor2.classList.toggle('active');
      }
    })
    this.suka = setInterval(()=>{this.setState(prev=>({
      message_value: prev.message_value + this.messages[prev.value].txt[prev.article_counter],
      article_counter: prev.article_counter + 1,
    }), ()=>{
      if(this.messages[this.state.value].txt.length===this.state.article_counter){
        clearInterval(this.suka)
        setTimeout(()=>{
          clearInterval(this.trzeci)
        },2000)
      }
    }
    )},60)
  }
  componentDidMount(){
    this.ind = setInterval(this.handleText, 100);
    this.cursor = setInterval(this.handleCursor, 400);
  }
  componentWillUnmount(){
    clearInterval(this.ind)
    clearInterval(this.cursor)
  }
  render() { 
    return ( 
    <div className="wrapper">
      <div className="header">
      <h2>{this.state.header_text}<span className="cursor">|</span></h2>
      {this.state.status?<div className="option">
      {'Jak się dziś czujesz?'}<br/>
      <select name="feel" value={this.state.value} onChange={this.handleChange}>
        <option value="0">Wybierz: </option>
        <option value="1">Jestem smutna</option>
        <option value="2">Jestem szczęśliwa</option>
        <option value="3">Mam przed sobą ciężkie wyzwanie</option>
        <option value="4">Pokłóciliśmy się</option>
        <option value="5">Moje mocne i słabe strony</option>
      </select>
      </div>:null}
      </div>
      <div className="article">
      {this.state.message_status?this.state.message_value:null}{this.state.value==="0"?null:<span className="spanik">|</span>}
      </div>
    </div> 
    );
  }
}
 
export default App;

