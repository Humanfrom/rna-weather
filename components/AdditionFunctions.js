export function directionToWord(dir) {
    if(dir >= 340 && dir < 25){
      return 'северный'
    }else if(dir >= 25 && dir < 70){
      return 'северо-восточный'
    }else if(dir >= 70 && dir < 115){
      return 'восточный'
    }else if(dir >= 115 && dir < 160){
      return 'юго-восточный'
    }else if(dir >= 160 && dir < 205){
      return 'южный'
    }else if(dir >= 205 && dir < 250){
      return 'юго-западный'
    }else if(dir >= 250 && dir < 295){
      return 'западный'
    }else if(dir >= 295 && dir < 340){
      return 'северо-западный'
    }
}
