@section('css')
    @include('layouts.datatables_css')
@endsection

{!! $dataTable->table(['id' => 'koreksi-table', 'width' => '100%', 'class' => 'table table-striped table-bordered']) !!}

@section('scripts')
    @include('layouts.datatables_js')
    {!! $dataTable->scripts() !!}
@endsection