class Nav {
    constructor() {
        this.state = {
            arriver: String,
            depart: String
        }
    }

    setStateArr(state) {
        this.state.arriver = state;
    }
    setStateDep(state) {
        this.state.depart = state;
    }

    getStateArr() {
        return this.state.arriver;
    }

    getStateDep() {
        return this.state.depart;
    }
}
export default Nav;