function checkSID() {
	let sid = (document.getElementById("sid").value).trim();
	const regex = /^[0-9]{10}$/;
	return regex.test(sid);
  }
  
  function checkCandiNo() {
	let candi = (document.getElementById("candi").value).trim();
	let num = parseInt(candi);
	if (!/^[0-9]+$/.test(candi) || isNaN(num) || num < 1 || num > 10) {
	  return false;
	} else {
	  return true;
	}
  }
  
  function validateForm() {
	if (!checkSID()) {
	  alert("รหัสนักศึกษาต้องประกอบด้วยจำนวนเต็มระหว่าง 0 ถึง 9 เท่านั้น และต้องมีความยาว 10 หลัก");
	  document.getElementById("sid").focus();
	  return false;
	} else {
	  if (!checkCandiNo()) {
		alert("หมายเลขผู้สมัครต้องเป็นตัวเลขจำนวนเต็มตั้งแต่ 1 ถึง 10 เท่านั้น");
		document.getElementById("candi").focus();
		return false;
	  } else {
		alert("ข้อมูลของคุณผ่านการตรวจสอบเรียบร้อยแล้ว");
		return true;
	  }
	}
  }
  