
import {render,fireEvent,screen} from "@testing-library/react"
import Button from './Button';
import App from '../App';


describe("Testing counter app",()=>{

    it("should render Add btn without error",()=>{

        render(<Button></Button>)
        let incbtn=screen.getByTestId("inc")
        expect(incbtn).toBeInTheDocument()

    })


    it("should render Reduce btn without error",()=>{

        render(<Button></Button>)

        let decbtn=screen.getByTestId("dec")

        expect(decbtn).toBeInTheDocument()

    })


    it("should have an element with counter value as default ( 0 )",()=>{

        render(<App></App>)

        let h1=screen.getByText("Count :0")
        expect(h1).toHaveTextContent(0)
    })


    it("onClick of ADD, value of Counter should increment by 5",()=>{

        render(<App></App>)

        let h1=screen.getByText("Count :0")
        let inc=screen.getByTestId("inc")
        fireEvent.click(inc);
        expect(h1).toHaveTextContent(5)
       
    })


    it("nClick of REDUCE, the value of Counter should decrement by 5",()=>{

        render(<App></App>)

        let h1=screen.getByText("Count :0")
        let dec=screen.getByTestId("dec")
        fireEvent.click(dec)
        expect(h1).toHaveTextContent(-5)

    })
})