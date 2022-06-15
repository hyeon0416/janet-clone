import hotKeyWordJson from '../../../../asset/json/top20.json'

function ListHot(){
    function Dday(arr){
        const now = new Date()
        const year = now.getFullYear()

        if (year > +arr[0]){
            return 'Soon'
        }
        else{
            const month = now.getMonth() + 1
            const day = now.getDate()
            let start = new Date(arr[0],arr[1],arr[2])
            const end = new Date(year,month,day)
            let btMs = end.getTime() - start.getTime()
            let btDay = btMs / (1000*60*60*24)
            return `D-${-btDay - 1}`
        }
    }
    return(
        <ul id="listHot">
            {
                hotKeyWordJson.map(data => {
                    let a = data.esRegdt.substring(0,data.esRegdt.indexOf('T'))
                    let dateArr = a.split('-',3)
                    return (
                        <li key={data.id}>
                            <div className="hot-image-box">
                                <img src={data.image} alt=""></img>
                                <h3 className="hot-image-box-name">{data.title}</h3>
                                <h5 className="hot-image-box-D_Day">{Dday(dateArr)}</h5>
                            </div>
                            <div className="hot-sub-text">
                                <p>{`시행기관 : ${data.licenseOrgan}`}</p>
                                <span className="hot-sub-text-date">{`시험일 : ${a}`}</span>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default ListHot