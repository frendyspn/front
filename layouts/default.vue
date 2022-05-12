<template>
    <div>
        <div class="page-wrapper compact-wrapper" id="pageWrapper">
			<app-header v-if="isAuth"></app-header>
			<div class="page-body-wrapper sidebar-icon">
				<app-sidebar v-if="isAuth"></app-sidebar>
				<div class="page-body">
					<nuxt/>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '@/components/layouts/Sidebar.vue'
    import Header from '@/components/layouts/Header.vue'
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                // isAuth: false
            }
        },
        computed: {
            ...mapState(['isAuth'])
        },
        components: {
            'app-sidebar': Sidebar,
            'app-header': Header
        }
    }
</script>