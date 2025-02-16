const jwt = require('jsonwebtoken');
const fs = require('node:fs');


const public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzS4UaTpvBAGIwcfp8mNbH+rBbHQQQ8/+Y8z6XwwWQXkO9YbW+zMfk/o4Ya+4UXeD7Y42zqX8OEPBS/q0cK4uBhFXKKaq++NrqDvs4HNTwDnvIpeszMP45ixbByidbPo4L4XO0wnimunGpv7CvPrrCjMDTG5UqlGwdyl7UHFf5SDkkWAkEFtd0Gi8yfXuaUNm2/7PGxOIYFgdDd3IOVR8NfqfKRT/lnz91z7ib57cULLZ3/vyGM9g6KQ0KEUzxAZ/8fV7aWKNruLyP5VypjsjZbSVN/sP30cwER4PRQ5OLLeUZXQjBGRqtbiMDw5h9GY4+3ywi0ox+HO4Ahzifn8gJQIDAQAB"

const private_key = "-----BEGIN PRIVATE KEY----- MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDNLhRpOm8EAYjBx+nyY1sf6sFsdBBDz/5jzPpfDBZBeQ71htb7Mx+T+jhhr7hRd4PtjjbOpfw4Q8FL+rRwri4GEVcopqr742uoO+zgc1PAOe8il6zMw/jmLFsHKJ1s+jgvhc7TCeKa6cam/sK8+usKMwNMblSqUbB3KXtQcV/lIOSRYCQQW13QaLzJ9e5pQ2bb/s8bE4hgWB0N3cg5VHw1+p8pFP+WfP3XPuJvntxQstnf+/IYz2DopDQoRTPEBn/x9XtpYo2u4vI/lXKmOyNltJU3+w/fRzARHg9FDk4st5RldCMEZGq1uIwPDmH0Zjj7fLCLSjH4c7gCHOJ+fyAlAgMBAAECggEAN3eukuf2HRohE2ntB9buSomXMq+JuhtfhTFjuhA1cAu/DIcgVRZ0AfgSB+6OII/zvWPF00WyEq/WcKjc4N1lmcRUUKwF60SG1RsmJWNoD75ZtHtWfqC4B9mT3jKPpGdcixRcXlb8yK5MQtb6ZEZdBgvWZ3IoN0cQMpanPI75wqIOe7y5xNmLdxxY1vndT0tHVK5yhkU0sgF1peZiqdIZo2nXj/ySGPw4BNdlnT7ud7ttsrmPezmrE7Tbbzo2jr/P4migdM7Wmbbu2MWcMAeuTN9OEbg9H4ar+CtbILBdNTxeyx5t+0TVNFdQTX76fEFUFI7x3ZhGch9+J7djsHRXvQKBgQD38PDt9eiMq+JdC5c1b985DD3Bt/erIH+L6W4zdEkPFRQVxd6173cDuElrwk9VIdCX3AbHMIH0rRAbq+FFNn+2XCGpRjw+XcW+cNK1Mp8QpXcmjhd4d9q66bv3j7h0nqMruYcqBtnkLk1EitQ1gTATJHTw2hQlh3en4Lj28zb+/wKBgQDT2VVIJG2yg9JHBBtpwqJRGPjwiShzPtx1d27HPQzhCL+nV/fv9PzcAeyKrhyn5sSz39+xXLgVeR6Tn1k6WtyQemFw/Nq/fnaI7u7TZBfIwxPn0kyvJdOMA9yiODmwft7fmPb/wc9bCKWhlRXrnLoyLm8vmFPFOpzHl2e25IkE2wKBgFhZgfC5dLFTumi/bZU8FQXmB8eUv2s6PFjlyEALitEWCL8tcAvSlc08iOUeK1jBoOvMGpo1/cjrNlc16yLXpbCcqd4AygzLK2COIXcx355157xUW6awxr9d9H3lt6vOr4QwKyrdoB0AJsZq1e1u6GuZzRXaD93DpO6sVByjVBCPAoGBAI/tbuhFf5Wxw3HmE23GAxsP2UkqFiY+Be90hfmsu4xDslnSBSusiQI7+GW7ptJXkToXllVcheBo2mI295sS0hkCXCM0VrWVCJk9o1pQ/WuzRVnRYbH5BAFzOjmn82G6wFavCNh35xWVCVp+/FaHs2SWcYmndvpfONbNQXRbTc/TAoGAcrHs3InZto+PrfnnOawrKV/UwjIzzdiVnbVdqENVm0d0pXKBqXK2shlb2EpqTxK/CVsYEwlyLYg18t59YfR1tXuj8q+iRfT3OOCC5C3IDw2NmLVtdt4OnqgUkKHnyVoomxIkbGMNrSAlH1rOv75ZC62HRhaLkyP1z/r274izHRU= -----END PRIVATE KEY-----"




function generateAccessToken() {

    const data = fs.readFileSync('./private.key');
    let userData = {name: "Tanveer Singh", age: 25, gender: "Male"};
    let token = jwt.sign(userData, data.toString(), { expiresIn: 120, algorithm: "RS256" });
    console.log(token);
} 

function verifyToken(token) {
    const publicKey = fs.readFileSync('./public.key');

    jwt.verify(token, publicKey, (err, data)=>{
        if(err) console.error("err ===> ", err);
        else console.log("data ==> ", data);
    });
}

generateAccessToken();
verifyToken("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGFudmVlciBTaW5naCIsImFnZSI6MjUsImdlbmRlciI6Ik1hbGUiLCJpYXQiOjE3Mzk3MTAwOTcsImV4cCI6MTczOTcxMDIxN30.uo_3bW9o6HMQKC5Gk4QBoVvwNydmfMXqALgeCo4fG7xvBtvRFuNRlKQ3bassq8H_bSzOWAdUqeRX-SI5l2WE39jahi2GJGV0x8hQv01hj4oePKVwYwC8EofqnXi7CD6vJC0H_DN6_AGXQe0Qhn1juuOaYYpL2su9MOnEWkw8GIveefPcv1xqHKbNLA9XmIneaoR1e2ngLODQNN-5PJHilAaszmY2t9qqqmZKcEd1PA4I1y22JqFzPlnXmhQujDAMYWEPAVfE8aSwmVseEFkV9AyQtvVl_l1b6mRB22z0b6tgtXxrzgF-VOC7y0KzpSKx-FkYPqkkbJPYt2Ptgxg53w")