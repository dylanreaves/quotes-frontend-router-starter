// ============================================================
// Home.jsx  ("All Quotes" page — lives at "/")
//
// The starting point: show every quote, and link each one to
// its own page.
// ============================================================

// TODO (Part 1): bring in the component for client-side navigation
//   links. Docs: https://reactrouter.com/start/declarative/navigating#link
// TODO (Part 1): bring in the quotes data
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router"
import quotesData from "../data/quotes"

function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  // const [authorInput, setAuthorInput] = useState('')
  // const [quoteInput, setQuoteInput] = useState('')

  const authorInput = (searchParams.get("author") || "")
  const quoteInput = (searchParams.get("quote") || "")

  // console.log("Author Input:", authorInput)
  // console.log("Quote Input:", quoteInput)

  useEffect(() => {
    // console.log("Runs on refresh?")
    // console.log("Author Input:", "'"+authorInput+"'", "Type:", typeof(authorInput))
    // console.log("Quote Input:", "'"+quoteInput+"'", "Type:", typeof(quoteInput))

    // setSearchParams((searchParams) => {
    //   searchParams.set("author", authorInput);
    //   searchParams.set("quote", quoteInput);
    //   return searchParams;
    // });
  }, [])

  function handleAuthorInput(event) {
    const inputVal = event.target.value
    // console.log(inputVal)

    setSearchParams((currentParams) => {
      const newParams = new URLSearchParams(currentParams)
      if (inputVal === "") {
        newParams.delete("author")
      } else {
        newParams.set("author", inputVal)
      }
      return newParams
    })
  }

  function handleQuoteInput(event) {
    const inputVal = event.target.value
    // console.log(inputVal)

    setSearchParams((currentParams) => {
      const newParams = new URLSearchParams(currentParams)
      if (inputVal === "") {
        newParams.delete("quote")
      } else {
        newParams.set("quote", inputVal)
      }
      return newParams
    })
  }

  function filterQuotes(quotes) {
    const filtered = quotes.filter((quote) => {
      const authorLower = quote.author.toLowerCase()
      const quoteLower = quote.text.toLowerCase()

      const hasAuthor = authorLower.includes(authorInput.toLowerCase())
      const hasQuote = quoteLower.includes(quoteInput.toLowerCase())

      // console.log("Has author:", hasAuthor)
      // console.log("Has quote:", hasQuote)

      if (hasAuthor && hasQuote) {
        //console.log(quote)
        return quote
      }
    })

    //console.log("Filtered Quotes:", filtered)
    return filtered
  }

  const displayedQuotes = filterQuotes(quotesData)
  
  return (
    <div className="app">
      <h1>Quotes</h1>

      <section className="card">
        <h2>All Quotes</h2>

        <input value={authorInput} onChange={handleAuthorInput} placeholder="Search by Author"/>
        <input value={quoteInput} onChange={handleQuoteInput} placeholder="Search by Quote"/>

        <ul>
          {displayedQuotes.map((quote) => { //{console.log(quote)}
          return (
            <li className="quote-item" key={quote.id}>
              <p className="quote-text"> {quote.text} </p>
              <p className="quote-author"> — {quote.author} </p>
              <Link to={`/quotes/${quote.id}`}> Link to Details </Link>
            </li>
          )
        })}
        </ul>

        {/*
          TODO (Part 1):
            - loop over the quotes array
            - render each quote's text and author (see the .quote-item /
              .quote-text / .quote-author classes in App.css)
            - make each quote a link to its own detail page
        */}
      </section>
    </div>
  )
}

export default Home
