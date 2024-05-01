import type * as _types from "./_types.js";
import type t_isUrl from "./_types.js";


//TEST : HEAD 
type t_test_head = _types.t_rest_head_http_https<"https://www.youtube.com/watch?v=jIqA5sg5gZM"> extends "www.youtube.com/watch?v=jIqA5sg5gZM" ? true : false 

//TEST : WWWs
type t_test_wwws = _types.t_rest_subdomain<"www.youtube.com/watch?v=jIqA5sg5gZM"> extends "youtube.com/watch?v=jIqA5sg5gZM" ? true : false 

//TEST : TLD
type t_test_tld = _types.t_rest_strAndTld<"youtube.com/watch?v=jIqA5sg5gZM"> extends "watch?v=jIqA5sg5gZM" ? true : false

//TEST : PART OF URL
type t_test_partOfUrl = _types.t_rest_partOfUrl<"watch"> extends "watch" ? true : false
type t_test_notPartOfUrl = _types.t_rest_notPartOfUrl<"watch"> extends "watch" ? false : true

//TEST : BODY URL
type t_test_bodyUrl = _types.t_rest_bodyUrl<"playlist/watch"> extends "/watch" ? true : false 
type t_test_2_bodyUrl = _types.t_rest_bodyUrl<"playlist/watch?v=uiokijklj"> extends "?v=uiokijklj" ? true : false

//TEST : REQ BODY URL
type t_test_reqUrlBody = _types.t_rest_reqUrlBody<"fdsfds=ukuiui&urc=kdsf"> extends "" ? true : false
type t_test_2_reqUrlBody = _types.t_rest_reqUrlBody<"fdsfds=ukuiui&?urc=kdsf&"> extends "&?urc=kdsf&" ? true : false
type t_test_3_reqUrlBody = _types.t_rest_reqUrlBody<"fds?fds=ukui?ui&urc=kdsf&"> extends "fds?fds=ukui?ui&urc=kdsf&" ? true :false 

//TEST : REQ
type t_test_reqUrl = _types.t_rest_reqUrl<"?fdsfds=ukuiui&urc=kdsf"> extends "" ? true : false
type t_test_2_reqUrl = _types.t_rest_reqUrl<"fdsfds=ukui?ui&urc=kdsf&"> extends "fdsfds=ukui?ui&urc=kdsf&" ? true : false

//TEST : URL
type t_test_url = t_isUrl<"https://www.youtube.com/watch?v=jiqa5sg5gzm"> 
type t_test_2_url = t_isUrl<"https://www.youtube.com/watch?v="> extends false ? true : false
type t_test_3_url = t_isUrl<"https://www.youtube.com/watch?v"> extends false ? true : false
type t_test_4_url = t_isUrl<"https://www.youtube.com">
type t_test_5_url =  t_isUrl<"https://www.youtube"> extends false ? true : false
type t_test_6_url = t_isUrl<"https://www"> extends false ? true : false
type t_test_7_url = t_isUrl<"https://"> extends false ? true : false
type t_test_8_url = t_isUrl<""> extends false ? true : false
