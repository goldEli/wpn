var users={
	//增
	insert:'INSERT INTO wpn_user(id,name) VALUES(?,?)',
	//删
	deleteById: 'DELETE FROM wpn_user WHERE id=',
    //查
    all: 'SELECT * FROM wpn_user',
}

module.exports=users;