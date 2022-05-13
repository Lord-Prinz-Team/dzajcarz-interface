import { BsFillFileEarmarkFill, BsDownload } from "react-icons/bs";

const OtherAttachment = ({name, size, url}) => {

  const download = (url) => {
    window.location = url;
  }



  const fileSize = size ?? "unknown";
  
  const convertUnits = (value) => {
    if(isNaN(+value)) {
      return "unknown";
    }
    if((value / (1 * 1000)) < 1) {
      return `${value} B`
    }
    if((value / (1 * 1000 * 1000)) < 1) {
      return `${Math.ceil(value / 1000)} KB`
    }
    if((value / (1 * 1000 * 1000 * 1000)) < 1) {
      return `${Math.ceil(value / (1000 * 1000))} MB`
    }
    return `${Math.ceil(value / (1000 * 1000 * 1000))} GB`
  }

  return <div className="flex self-start items-center gap-3 p-3 border-solid border border-gray-900 bg-gray-800 rounded-md">
    <div>
      <BsFillFileEarmarkFill size="42" className="text-gray-400" />
    </div>
    <div className="flex flex-col">
      <span className="text-lg text-blue-400 cursor-pointer" onClick={download.bind(null, url)}>{name}</span>
      <span className="text-xs text-gray-500">{convertUnits(fileSize)}</span>
    </div>
    <div>
      <BsDownload size="22" className="text-gray-500 cursor-pointer ml-2" onClick={download.bind(null, url)}/>
    </div>
  </div>

}

export default OtherAttachment;