const Detailnotice = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/posts');
          
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
  
      fetchData();
    }, []);
}
const Home = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/posts');
          
          const jsonData = await response.json();
          const relevantPost= jsonData.find(post=>post.isRelevant== true);
        
          setData(relevantPost);
          
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
  
      fetchData();
    }, []);
}