export const generateRandom = (maxLimit = 100) => {
  let rand = Math.random() * maxLimit;
  rand = Math.floor(rand);
  return rand;
};
export const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

export const takeSome = (arr) => {
  const maxLimit = arr.length;
  let rand = Math.random() * maxLimit;
  rand = Math.floor(rand);
  return arr[rand];
};

/**
 *to convert ms to date
 * @param {conv} time the ms time
 */
export function secondTotime(time) {
  return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + (time % 60);
}

/**
 *to convert object to hour
 * @param {conv} time the ms time
 */
export function computeTime(time) {
  let car = {
    1: 24,
    2: 1,
    3: 0.017,
  };
  //"duration": "{\"dur\":66,\"unit\":1}"
  return time.dur * car[time.unit];
}

/**
 *to convert object to hour
 * @param {conv} time the ms time
 */
export function hour_to_string(time, separator = " h ", limit = " min") {
  let plain = Math.trunc(time);
  let minute = Math.trunc(60 * (time - plain));
  return `${
    plain.toString().length === 1 ? "0" + plain : plain
  } ${separator.toString()} ${
    minute.toString().length === 1 ? "0" + minute : minute
  } ${limit.toString()} `;
}

/**
 *to random a value from an object
 * @param {conv} time the ms time
 */
export function randomObjProp(obj) {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
}

/**
 *to random a value from an object
 * @param {conv} time the ms time
 */
export function date_stringer(last_modified) {
  let year = last_modified.getFullYear(),
    month = last_modified.getMonth() + 1,
    dt = last_modified.getDate();
  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return year + "-" + month + "-" + dt;
}

/**
 *deleteAllCookies
 * @param {conv} time the ms time
 */

export function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

export function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/**
 *to convert data to strin date format "yyyy/mm/dd"
 * @param {conv} time the ms time
 */
export function date_to_string(last_modified, whithHour) {
  if (last_modified) {
    last_modified = new Date(last_modified);
    let year = last_modified.getFullYear();
    let month = last_modified.getMonth() + 1;
    let dt = last_modified.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    let strdate = year + "-" + month + "-" + dt;
    strdate += whithHour
      ? " , " + last_modified.getHours() + ":" + last_modified.getMinutes()
      : "";

    return strdate;
  }
}
/**
 *ordon list based on @param {compar} a property
 */
export function ordoner(res, compar, order = 1) {
  return res.sort(function compare(a, b) {
    let fi = compar ? a[compar] : a;
    let se = compar ? b[compar] : b;
    if (fi < se) {
      return -order || -1;
    }
    if (fi > se) {
      return order || 1;
    }
    return 0;
  });
}

/**
 *join les noms par des tirets @param {compar} a property
 */

export function hypheny(res) {
  return res ? res.replace(/\s+/g, "-") : "";
}
/**
 *casse un string de forme "a_b_c_ ou les clés prrécèdent les valeurs
  en objet key-value"
 @param {compar} a property
 */
export function CookiePersonalizer(res) {
  let votea = res.split("_");
  let tt = {};
  for (let ci = 0; ci < votea.length - 1; ci++) {
    tt[votea[ci]] = Number(votea[ci + 1]);
    ci++;
  }
  return tt;
}

/**
 *serealiser les donnéess @param {compar} a property
 */

export function UriEncoder(obj) {
  var formBody = [];
  for (var property in obj) {
    formBody.push(
      encodeURIComponent(property) + "=" + encodeURIComponent(obj[property])
    );
  }
  formBody = formBody.join("&");
  return formBody;
}

/*
function deserialize(serializedJavascript) {
  // eslint-disable-next-line no-eval
  return eval("(" + serializedJavascript + ")");
}
*/
/**
 *verifie la presence d'un id dans un itm array@param {compar} a property
 */
/*determine la présence de l'id dans un tableau d'option*/

export const is_itemed = (arr, s, id) => {
  if (arr[s])
    return (
      arr[s] &&
      (arr[s].findIndex((item) => item === id) !== -1 ||
        arr[s].findIndex((item) => Number(item.id) === id) !== -1)
    );
};

/**
 *join  @param {compar} a property
 *aide a inflater un array state
/**/

export const actonlist_inflater = (
  pre_ret,
  setpre_ret,
  intex,
  type = "string",
  schema = ""
) => {
  let pre_reti = pre_ret;
  const itemIndex = pre_ret[intex];
  if (typeof itemIndex === type) {
    pre_reti = pre_reti.filter((item, index) => index !== intex);
  } else {
    pre_reti = [...pre_reti, schema];
  }
  return setpre_ret([...pre_reti]);
};

/**
 *join  @param {compar} a property
 *aide a reccuperer les change de la liste inflater
/**/

export const inflater_changeGetter = (pre_ret, setpre_ret, val, intex) => {
  let pre_reti = pre_ret;
  pre_reti[intex] = val;
  setpre_ret(pre_reti);
  return setpre_ret(pre_reti);
};

/**
 *Compare deux objets par valeurs
 */

export const object_comparer = (o1, o2) => {
  for (var key in o1) {
    if (o1[key] !== o2[key]) {
      return true;
    }
  }
  return false;
};

/**
 *distibct element in array
 */
export const uniquize = (res, po) => {
  const result = [];
  const map = new Map();
  for (const item of res) {
    if (!map.has(item[po])) {
      map.set(item[po], true);
      result.push(item);
    }
  }
  return result;
};

/**
 *distibct element in array
 */
export const reorder_draggable = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
