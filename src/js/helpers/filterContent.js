const filterContent = (content, filters) =>{
    const filtering = (ncontent, name, props) => {
        switch(name) {
            case "FILTER_VEHICLE":
                return ncontent.filter(item => {
                    return item[props.field] === props.filter;
                })
            case "FILTER_VEHICLE_BRAND":
                return ncontent.filter(item => {
                    return item[props.field] === props.filter;
                })
            case "FILTER_VEHICLE_COLOR":
                return ncontent.filter(item => {
                    return (item[props.field].indexOf(props.filter) !==-1)
                })
            default:
             return ncontent;
        }
    }
    Object.keys(filters).map(name => {
        let props = filters[name];
        if(props.filter === "0") return;
        content = filtering(content, name, props)
    })
    return content;
}

export default filterContent;