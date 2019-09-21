

class Weapon{
    render(){
        const root = document.getElementById('root');
        const classMagic = this.magic ? 'magic' : 'regular';
        root.innerHTML += `
        <div class="${classMagic}">
            <h2>${this.name}</h2>
            <span>${this.material}</span>
            <div class="icon">
            <img src="${this.icon}" width="100" height="100"/>
            </div>
        </div>
        `;
    }
}

class Sword extends Weapon{
    constructor({name = 'Unnamed sword', material = 'steel', magic}){
        super();
        this.weaponType = 'sword';
        this.name = name;
        this.material = material;
        this.magic = magic !== undefined ? magic : false;
        this.icon = 'images/swords.svg';
    }
}

class Bow extends Weapon{
    constructor({name = 'Unnamed bow', material = 'Wood', style, magic}){
        super();
        this.weaponType = 'bow';
        this.name = name;
        this.material = material;
        this.magic = magic !== undefined ? magic : false;
        this.icon = 'images/archery.svg';
    }
}


class WeaponFactory {
    makeWeapon( weapon ){
        let WeaponClass = null;
        if( weapon.weaponType === 'sword'){
        WeaponClass = Sword;
        } else if( weapon.weaponType === 'bow'){
        WeaponClass = Bow;
        } else {
        return false;
        }
        return new WeaponClass( weapon );
    }
}

const Fabric = () => {

    const mySuperForge = new WeaponFactory();
    const MakeMeBlade = mySuperForge.makeWeapon({
        weaponType: 'sword',
        name: 'winner',
        material: 'dark iron',
        magic: true
    });
    const MakeMeBlade2 = mySuperForge.makeWeapon({
        weaponType: 'sword',
        name: 'defender',
        magic: false
    })
    const MakeMeBow = mySuperForge.makeWeapon({
        weaponType: 'bow',
        name: 'defender',
        material: 'dark iron',
        magic: false
    })

    console.log( MakeMeBlade, MakeMeBlade2, MakeMeBow);
    // MakeMeBlade.render();
    // MakeMeBlade2.render();
    // MakeMeBow.render();
    console.log('Fabric')

}


export default Fabric;
