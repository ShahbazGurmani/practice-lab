export default function GetApi(url) {
    
    const [result , setResult] = useState([]);
    const getAPIData = async () => {
        //call api in this method;
        
        let data = await fetch(url);
        //when result come then convert into json formate;
        data = await data.json();
        //  console.warn(result);
        setResult(data);
        
    };

    // useEffect(() => {
    //     axios
    //       .get("https://fakestoreapi.com/products", {
    //         // params: {
    //         //     articleID: articleID
    //         // }
    //       })
    //       .then(function (response) {
    //         console.log("response", response.data);
    
    //         setData(response.data);
    //       })
    //       .catch(function (error) {
    //         // console.log(error);
    //       })
    //       .then(function () {
    //         // always executed
    //         console.log("Always", data[0]);
    //       });
    //   }, []);

    return(
        {result ,setResult, getAPIData}
    );
}