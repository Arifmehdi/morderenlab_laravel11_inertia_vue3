import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import '../../public/backend/plugins/jquery/jquery';
import '../../public/backend/plugins/jquery-ui/jquery-ui';
import '../../public/backend/plugins/bootstrap/js/bootstrap.bundle';
import '../../public/backend/plugins/chart.js/Chart';
import '../../public/backend/plugins/sparklines/sparkline';
// import '../../public/backend/plugins/jquery-knob/jquery.knob';
import '../../public/backend/plugins/sparklines/sparkline';
// import '../../public/backend/plugins/moment/js/moment';

// import '../../public/backend/plugins/daterangepicker/daterangepicker';

// import '../../public/backend/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4';
import '../../public/backend/plugins/summernote/summernote-bs4';
import '../../public/backend/plugins/overlayScrollbars/js/jquery.overlayScrollbars';
import '../../public/backend/dist/js/adminlte';
import '../../public/backend/plugins/datatables/jquery.dataTables';
import '../../public/backend/plugins/datatables-bs4/js/dataTables.bootstrap4';
import '../../public/backend/plugins/datatables-responsive/js/dataTables.responsive';
import '../../public/backend/plugins/datatables-responsive/js/responsive.bootstrap4';
import '../../public/backend/plugins/datatables-fixedheader/js/dataTables.fixedHeader';
import '../../public/backend/plugins/datatables-buttons/js/dataTables.buttons';
import '../../public/backend/plugins/datatables-buttons/js/buttons.bootstrap4';
import '../../public/backend/plugins/datatables-buttons/js/buttons.bootstrap4';
import '../../public/backend/plugins/datatables-buttons/js/buttons.bootstrap4';
import '../../public/backend/plugins/jszip/jszip';
// import '../../public/backend/plugins/pdfmake/vfs_fonts';
import '../../public/backend/plugins/datatables-buttons/js/buttons.html5';
import '../../public/backend/plugins/datatables-buttons/js/buttons.print';
import '../../public/backend/plugins/datatables-buttons/js/buttons.colVis';
import '../../public/backend/plugins/jquery-validation/jquery.validate';
// import '../../public/backend/plugins/print/js/jQuery.print';
// import '../../public/backend/js/jquery.classyqr';
import '../../public/backend/js/select2';
import '../../public/backend/plugins/sweetalert2/sweetalert2.all';
// import '../../public/backend/plugins/sweet-alert/sweetalert';

{/*
<script src="{{  asset('backend/js/toastr.min.js')}}"></script>
<!-- Validate -->
<script src="{{ asset('backend/plugins/jquery-validation/jquery.validate.min.js')}}"></script>
<script src="{{ asset('backend/plugins/print/jQuery.print.min.js')}}"></script>
<script src="{{ asset('backend/js/jquery.classyqr.min.js')}}"></script>
<script src="{{ asset('backend/js/select2.js')}}"></script>

<script src="{{ asset('backend/plugins/sweet-alert/sweetalert.min.js')}}"></script>



<script src="{{ asset('backend/plugins/jquery/jquery.min.js')}}"></script>
<!-- jQuery UI 1.11.4 -->
<script src="{{ asset('backend/plugins/jquery-ui/jquery-ui.min.js')}}"></script>
<!-- Bootstrap 4 -->
<script src="{{ asset('backend/plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
<!-- ChartJS -->
<script src="{{ asset('backend/plugins/chart.js/Chart.min.js')}}"></script>
<!-- Sparkline -->
<script src="{{ asset('backend/plugins/sparklines/sparkline.js')}}"></script>
<!-- jQuery Knob Chart -->
<script src="{{ asset('backend/plugins/jquery-knob/jquery.knob.min.js')}}"></script>
<!-- daterangepicker -->
<script src="{{ asset('backend/plugins/moment/moment.min.js')}}"></script>
<script src="{{ asset('backend/plugins/daterangepicker/daterangepicker.js')}}"></script>
<!-- Tempusdominus Bootstrap 4 -->
<script src="{{ asset('backend/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js')}}"></script>
<!-- Summernote -->
<script src="{{ asset('backend/plugins/summernote/summernote-bs4.min.js')}}"></script>
<!-- overlayScrollbars -->
<script src="{{ asset('backend/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js')}}"></script>
<!-- AdminLTE App -->
<script src="{{ asset('backend/dist/js/adminlte.js')}}"></script>
<script src="{{ asset('backend/plugins/datatables/jquery.dataTables.min.js')}}"></script>
<script src="{{ asset('backend/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js')}}"></script>
<script src="{{ asset('backend/plugins/datatables-responsive/js/dataTables.responsive.min.js')}}"></script>
<script src="{{ asset('backend/plugins/datatables-responsive/js/responsive.bootstrap4.min.js')}}"></script>
<script src="{{ asset('backend/plugins/datatables-fixedheader/js/dataTables.fixedHeader.min.js')}}" type="text/javascript"></script>
<script src="{{ asset('backend/plugins/datatables-buttons/js/dataTables.buttons.min.js')}}"></script>
<script src="{{ asset('backend/plugins/datatables-buttons/js/buttons.bootstrap4.min.js')}}"></script>
<!-- DataTables -->
<script src="{{ asset('backend/plugins/jszip/jszip.min.js')}}"></script>
<script src="{{ asset('backend/plugins/pdfmake/pdfmake.min.js')}}"></script>
<script src="{{ asset('backend/plugins/pdfmake/vfs_fonts.js')}}"></script>
<script src="{{ asset('backend/plugins/datatables-buttons/js/buttons.html5.min.js')}}"></script>
<script src="{{ asset('backend/plugins/datatables-buttons/js/buttons.print.min.js')}}"></script>

<script src="{{ asset('backend/plugins/datatables-buttons/js/buttons.colVis.min.js')}}"></script>
<!-- Toastr-->
*/}









const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
