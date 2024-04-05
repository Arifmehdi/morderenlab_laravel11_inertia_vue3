<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<script>
import Breadcumb from '@/Pages/partial/Breadcumb.vue';

export default {
  components: {
    Breadcumb
  },
  data() {
    return {
        message: 'Repots',
        iconClass: 'fa fa-flag'

    };
  }
}
</script>
<template>

<div>
        <Head title="Reports" />

        <AuthenticatedLayout>
            <div class="content-wrapper">
                <Breadcumb :message="message" :iconClass="iconClass"></Breadcumb>
                    <!-- Main content -->
                <section class="content">
                    <div class="container-fluid">

                        <!-- content goes here  -->
                        <div class="card card-primary card-outline">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <!-- {{__('Invoices Table')}} -->
                                    Reports Table
                                </h3>
                            </div>

                            <!-- /.card-header -->
                            <div class="card-body">
                            <!-- filter -->
                            <div id="accordion">
                                <div class="card card-info">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" class="btn btn-primary collapsed" aria-expanded="false">
                                    <i class="fas fa-filter"></i>
                                    <!-- {{__('Filters')}} -->
                                    Filters
                                </a>
                                <div id="collapseOne" class="panel-collapse in collapse">
                                    <div class="card-body">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-3">
                                        <div class="form-group">
                                            <label for="filter_date">
                                                <!-- {{__('Date')}} -->
                                                Date
                                            </label>
                                            <!-- <input type="text" class="form-control datepickerrange" id="filter_date" placeholder="{{__('Date')}}"> -->
                                            <input type="text" class="form-control datepickerrange" id="filter_date" placeholder="Date">
                                        </div>
                                        </div>
                                        <div class="col-lg-3">
                                        <div class="form-group">
                                            <label for="filter_status">
                                                <!-- {{__('Status')}} -->
                                                Status

                                            </label>
                                            <select name="filter_status" id="filter_status" class="form-control select2">
                                                <option value="" selected>
                                                    <!-- {{__('All')}} -->
                                                    All

                                                </option>
                                                <option value="1">
                                                    <!-- {{__('Done')}} -->
                                                    Done

                                                </option>
                                                <option value="0">
                                                    <!-- {{__('Pending')}} -->
                                                    Pending

                                                </option>
                                            </select>
                                        </div>
                                        </div>
                                        <div class="col-lg-3">
                                        <div class="form-group">
                                            <label for="filter_barcode">
                                                <!-- {{__('Barcode')}} -->
                                                Barcode
                                            </label>
                                            <!-- <input type="text" class="form-control" id="filter_barcode" placeholder="{{__('Barcode')}}"> -->
                                            <input type="text" class="form-control" id="filter_barcode" placeholder="Barcode">
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <!-- \filter -->
                            <div class="row">
                                <div class="col-lg-12 table-responsive">
                                    <table id="groups_table" class="table table-striped table-hover table-bordered" width="100%">
                                    <thead>
                                    <tr>
                                        <th width="10px">#</th>
                                        <!-- <th width="10px">{{__('Barcode')}}</th>
                                        <th width="100px">{{ __('Patient Code') }}</th>
                                        <th>{{ __('Patient Name') }}</th>
                                        <th width="50px">{{ __('Gender') }}</th>
                                        <th width="50px">{{ __('Age') }}</th>
                                        <th width="50px">{{ __('Phone') }}</th>
                                        <th width="200px">{{ __('Tests') }}</th>
                                        <th width="100px">{{ __('Date') }}</th>
                                        <th class="text-center" width="10px">{{__('Done')}}</th>
                                        <th class="text-center" width="10px">{{__('Signed')}}</th>
                                        <th width="50px">{{ __('Action') }}</th> -->

                                        <th width="10px">Barcode</th>
                                        <th width="100px">Client Code</th>
                                        <th>Client Name</th>
                                        <th width="50px">Gender</th>
                                        <th width="50px">Age</th>
                                        <th width="50px">Phone</th>
                                        <th width="200px">Tests</th>
                                        <th width="100px">Date</th>
                                        <th class="text-center" width="10px">Done</th>
                                        <th class="text-center" width="10px">Signed</th>
                                        <th width="50px">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- content end here  -->
                    </div>
                </section>
                <!-- /.content -->
            </div>
            <!-- /.content-wrapper -->
        </AuthenticatedLayout>
    </div>
</template>
