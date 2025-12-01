import React from "react"
import "./Bookpage.css"

const books = [
  {
    title: "「草枕」Kusamakura",
    author: "Natsume\nSouseki",
    link: "https://goodreads.com/book/show/1776113.Kusamakura"
  },
  {
    title: "All Quiet\non the\nWestern Front",
    author: "Erich\nMaria\nRemarque",
    link: "https://www.goodreads.com/book/show/355697.All_Quiet_on_the_Western_Front"
  },
  {
    title: "Bùi Xuân Phái\nCon Mắt của Trái Tim",
    author: "Nhà xuất bản Trẻ",
    link: "https://www.nxbtre.com.vn/en/book/bui-xuan-phai-con-mat-cua-trai-tim-146425.html"
  },
  {
    title: "Gió lạnh đầu mùa",
    author: "Thạch Lam",
    link: "https://www.goodreads.com/book/show/31340091"
  },
  {
    title: "Chokepoint Capitalism",
    author: "Rebbeca Giblin\n& Cory Doctorow",
    link: "https://www.goodreads.com/book/show/60098290-chokepoint-capitalism"
  },
  {
    title: "The Art of Loving",
    author: "Erich\nFromm",
    link: "https://www.goodreads.com/book/show/14142.The_Art_of_Loving?from_search=true&from_srp=true&qid=BOl0T7cmJW&rank=1"
  },
  {
    title: "Kim Ji-young,\nBorn 1982",
    author: "Cho Nam-ju",
    link: "https://www.goodreads.com/book/show/35297901-82"
  }
]

export default function Bookpage() {
  return (
    <div className="book-section">
      <div className="book-intro">
        <div className="book-intro-title">Books I Read</div>
        <div>
          <p>
            I love reading books that make me think or feel something new. 
            I don’t stick to one type. I read stories, essays, and ideas from all kinds of places.
            Even with books I don’t fully understand, coming back to read them later with better 
            and more mature perspectives, and seeing how my understanding has changed, is part of the fun. 
            It feels like a new life achievement unlocked.
            <br/><br/>
            Reading helps me slow down and see things differently. 
            Sometimes it gives me answers. Sometimes it gives me better questions. 
            I like books that surprise me, and stay in my head long after I close the last page.
          </p>
        </div>
      </div>

      <div className="book-shelf-wrapper">
        <div className="book-shelf">
          {books.map((book, index) => (
            <a
              key={index}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="book-vertical">
                <div className="book-title-vertical">
                  {book.title.split("\n").map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </div>
                <div className="book-author-vertical">
                  {book.author.split("\n").map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <img src="/elements/teddy-bear.png" alt="Bear" className="book-bear" />
      </div>
    </div>
  )
}
