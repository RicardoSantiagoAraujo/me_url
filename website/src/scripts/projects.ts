
export  function getImageFromProject(whichImgId:"idMainImg" | "idBgImg",data: any){
    const meta = data.images.find((img: any) => img.id === data[whichImgId]) || null;
    const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{jpeg,jpg,png,gif,svg}')
    const img = meta ? images[meta.url] ? images[meta.url]() : meta.url : null;
    return {img, meta}
}
